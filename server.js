const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const { body, validationResult } = require('express-validator'); // For validation
require('dotenv').config(); // Load environment variables from .env file
const rateLimit = require('express-rate-limit'); // For rate limiting
const axios = require('axios');

const app = express();
const port = process.env.PORT; // Use environment variable

// Reusable validation runner
const validate = validations => {
  return async (req, res, next) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
    }
    next();
  };
}; 

// See end-user IP rather than Cloudflare IP when limiting form submissions by IP
app.set('trust proxy', 2);
//https://github.com/express-rate-limit/express-rate-limit/wiki/Troubleshooting-Proxy-Issues

// Serve static files (like your HTML form)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); // For x-www-form-urlencoded
app.use(express.json()); // For application/json

// Configure rate limiter
const formSubmitLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3, // Limit each IP to # requests per `windowMs`
  standardHeaders: true, // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  message: 'Too many form submissions from this device, please try again later.',
});

// Route to handle form submission

app.post('/send-email',
  // Honeypot check
  (req, res, next) => {
    // Check if req.body.company has any content (honeypot)
    if (req.body.company && req.body.company.length > 0) {
      return res.status(400).json({ message: 'Form submission failed.' });
  }
    // If company (honeypot) field  is empty, pass control to the next middleware
    next();
},



  // Validation middleware
  validate([
    body('subject').isLength({ min: 1 }).withMessage('Name is required'),
    body('preferredcontact').isIn(['phone', 'email', 'other']).withMessage('Contact method is required'),
    body('contactreason').isIn(['artist', 'business', 'other']).withMessage('Contact reason is required'),
    
    // Conditional validation for contact method inputs
    body('phone-number').if(body('preferredcontact').equals('phone')).isMobilePhone().withMessage('Valid phone number is required'),
    body('email-address').if(body('preferredcontact').equals('email')).isEmail().withMessage('Valid email address is required'),
    body('other-method').if(body('preferredcontact').equals('other')).isLength({ min: 1 }).withMessage('Other contact method is required'),
    
    // Conditional validation for other reason input
    body('other-reason').if(body('contactreason').equals('other')).isLength({ min: 1 }).withMessage('Please specify your reason'),
  ]),

  formSubmitLimiter, // Rate limiter

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

//  const { subject, body } = req.body;
    const { subject, body, preferredcontact, contactreason } = req.body;
  

    // Capture the IP address of the user to watch for repeat senders and add as a signature to their sent form emails
  function getClientIp(req) {
    const xForwardedFor = req.headers['x-forwarded-for'];
    if (xForwardedFor) {
      return xForwardedFor.split(',')[0].trim();
    }
    return req.ip;
  }
  
  // Use this function to get the IP address
  const ip = getClientIp(req);
  
  let ipDetails = {};
  try {
    const ipDetailsResponse = await axios.get(`https://ipinfo.io/${ip}/json`);
    ipDetails = ipDetailsResponse.data;
  } catch (error) {
    ipDetails =`Error fetching IP Location details: ${error.message}`;
  }

  // Extract relevant details
const city = ipDetails.city || 'N/A';
const region = ipDetails.region || 'N/A';
const country = ipDetails.country || 'N/A';
const timezone = ipDetails.timezone || 'N/A';

// Format the details
const ipDetailsText = `City: ${city} | Region: ${region} | Country: ${country} | Timezone: ${timezone}`;


  // Determine the contact method text based on the selected option- to be added to email text
 let contactDetails = '';
 switch (preferredcontact) {
   case 'phone':
     contactDetails = `Phone Number: ${req.body['phone-number'] || 'N/A'}`;
     break;
   case 'email':
     contactDetails = `Email Address: ${req.body['email-address'] || 'N/A'}`;
     break;
   case 'other':
     contactDetails = `Other Contact Info: ${req.body['other-method'] || 'N/A'}`;
     break;
   default:
     contactDetails = 'No contact details provided';
 }

 // Determine the contact reason text based on the selected option - to be added to email text
 let contactReasonDetails = '';
 switch (contactreason) {
   case 'artist':
     contactReasonDetails = "Reason: I'd like to join the label";
     break;
   case 'business':
     contactReasonDetails = "Reason: I have a business inquiry";
     break;
   case 'other':
     contactReasonDetails = `Other Reason: ${req.body['other-reason'] || 'N/A'}`;
     break;
   default:
     contactReasonDetails = 'No reason provided';
 }
 
 // Configure nodemailer transport for SMTP service
  let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,  // Use environment variable
      pass: process.env.EMAIL_PASS   // Use environment variable
    },
  debug: true, // show debug output
  logger: true // log information in console
  });

  try {
      // Send email
      let info = await transporter.sendMail({
        from: `"RoomToRoamStudios" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject:`${contactreason} | ${subject}`, 
        text: 
`Contact method: ${preferredcontact} (${contactDetails}),
Contact reason: ${contactreason} (${contactReasonDetails}),
Additional info: ${body || 'No additional info provided'},


        SECURITY SIGNATURE:
           Submitter IP: ${ip} (if multiple messages are received by this IP they are coming from the same device-treat with caution),
           Submitter Location: ${ipDetailsText} 
           (check location for accuracy to their provided details and be wary of any non-US locations)`,
          });
       



      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Error submitting form' });
    }
  }
);

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
