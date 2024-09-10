const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Serve static files (like your HTML form)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { subject, body } = req.body;

  // Configure nodemailer transport for SMTP service
  let transporter = nodemailer.createTransport({
    service: 'process.env.SMTP_SERVICE',
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
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
