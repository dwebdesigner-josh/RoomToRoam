const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const { body, validationResult } = require('express-validator'); // **Added for validation**
require('dotenv').config(); // Load environment variables from .env file
const rateLimit = require('express-rate-limit'); // Added for rate limiting

const app = express();
const port = process.env.PORT; // Use environment variable



//see end-user IP rather than cloudfare IP when limiting form submissions by IP
app.set('trust proxy', true);

// Serve static files (like your HTML form)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

  // Configure rate limiter
  const formSubmitLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    max: 3, // Limit each IP to 3 requests per `windowMs`
    standardHeaders: true, // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: 'Too many form submissions from this device, please try again later.',
  });


// Route to handle form submission 
app.post('/send-email', 

     // Honeypot check
     (req, res, next) => {
        if (req.body.body2) {
            return res.status(400).json('Form submission failed.');
        }
        next();
    },
    
    // Apply rate limiter to the route
    formSubmitLimiter,

    // validation middleware
    [
      body('subject').notEmpty().withMessage('Subject is required'),
      body('body').notEmpty().withMessage('Message body is required')
    ],

    async (req, res) => {
      const errors = validationResult(req); //Check validation errors
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const { subject, body } = req.body;

    
      // Configure nodemailer transport for SMTP service
      let transporter = nodemailer.createTransport({
        service: process.env.SMTP_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,  // Use environment variable
          pass: process.env.EMAIL_PASS   // Use environment variable
        }
      });

  try {
    // Send email
    let info = await transporter.sendMail({
      from: `"RoomToRoamStudios" <${process.env.EMAIL_USER}>`,  // Use environment variable
      to: process.env.RECIPIENT_EMAIL,                // Use environment variable
      subject: subject,
      text: body,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
