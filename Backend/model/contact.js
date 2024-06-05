const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    trim: true
  },
  jobTitle: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\+?[1-9]\d{1,14}$/.test(v); // E.164 format for phone numbers
      },
      message: props => `${props.value} is not a valid contact number!`
    }
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  services: {
    type: [String],
    required: true,
    enum: [
      'For Retail Outlets',
      'For Refineries/Facilities',
      'For Residentaial Societies',
      'Hospitality',
    ]
  },
  installation_area: {
    type: String,
    required: true,
    enum: ['Indoor', 'Outdoor', 'Both']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
