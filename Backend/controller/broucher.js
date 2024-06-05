const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const BrochureDownload = require('../model/brochure');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS
  }
});

const sendBrochure = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;

    // Validate input
    if (!name || !email || !phoneNumber) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone number are required.' });
    }

    const mailOptionsToUser = {
      from: 'support@ardracloud.com', // Sender's email
      to: email, // User's email
      subject: 'Thank You for Downloading Our Brochure',
      text: `Dear ${name},\n\nThank you for downloading our brochure. Please find the brochure attached.\n\nBest regards,\nThe Support Team`,
      attachments: [
        {
          filename: 'brochure.pdf',
          path: 'C:\\Users\\sajal\\OneDrive\\Documents\\brochure.pdf' 
        }
      ]
    };

    const mailOptionsToSender = {
      from: 'support@ardracloud.com', // Sender's email
      to: 'sender@example.com', // Sender's email address for notifications
      subject: 'New Brochure Download Request',
      text: `A user named ${name} (${email})   has requested the brochure. Please check the database for more details.`,
    };

    // Send email to user
    const infoToUser = await transporter.sendMail(mailOptionsToUser);
    console.log('Brochure email sent to user:', infoToUser.response);
    
    // Send notification email to sender
    const infoToSender = await transporter.sendMail(mailOptionsToSender);
    console.log('Notification email sent to sender:', infoToSender.response);
    
    // Store user details in the database
    const newUserRequest = new BrochureDownload({
      name,
      email,
      phoneNumber,
      requestedAt: new Date() // Add the current date and time
    });
    await newUserRequest.save();

    return res.status(200).json({ success: true, message: 'Brochure email sent successfully.' });
  } catch (error) {
    console.error('Error processing brochure request:', error);
    return res.status(500).json({ success: false, message: 'An error occurred while processing the brochure request.' });
  }
};

module.exports = { sendBrochure };
