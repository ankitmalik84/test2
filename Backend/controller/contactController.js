const nodemailer = require('nodemailer');
const ContactForm = require('../model/contact');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.ZOHO_USER, 
    pass: process.env.ZOHO_PASS
  }
});

const contactForm = async (req, res) => {
  try {
    const { firstName, lastName, companyName, jobTitle, email, contactNumber, message, services, installation_area } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !contactNumber || !message || !services || !installation_area) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const selectedServices = Array.isArray(services) ? services.join(', ') : services;

    const supportMailOptions = {
      from: 'support@ardracloud.com',
      to: 'support@ardracloud.com',
      subject: 'New Contact Form Submission',
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nCompany Name: ${companyName}\nJob Title: ${jobTitle}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}\nServices: ${selectedServices}\nInstallation Area: ${installation_area}`
    };

    // Send email to support
    transporter.sendMail(supportMailOptions, (error, info) => {
      if (error) {
        console.error('Error occurred while sending email to support:', error);
      } else {
        console.log('Email sent to support:', info.response);
      }
    });

    const thankYouMailOptions = {
      from: 'support@ardracloud.com',
      to: req.body.email,
      subject: 'Thank You for Contacting Us',
      text: `Dear ${firstName},\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Support Team`
    };

    
    transporter.sendMail(thankYouMailOptions, async (error, info) => {
      if (error) {
        console.error('Error occurred while sending thank-you email to the client:', error);
        return res.status(500).json({ success: false, message: 'An error occurred while sending the thank-you email.' });
      } else {
        console.log('Thank-you email sent to the client:', info.response);
        
        try {
          const contactFormData = new ContactForm({
            firstName,
            lastName,
            companyName,
            jobTitle,
            email,
            contactNumber,
            message,
            services,
            installation_area
          });
          await contactFormData.save();
          return res.status(200).json({ success: true, message: 'Your message has been sent successfully. Thank you for contacting us.' });
        } catch (error) {
          console.error('Error saving contact form data:', error);
          return res.status(500).json({ success: false, message: 'An error occurred while saving the contact form data.' });
        }
      }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ success: false, message: 'An error occurred while processing the contact form.' });
  }
};

module.exports = { contactForm };
