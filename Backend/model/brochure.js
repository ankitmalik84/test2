const mongoose = require('mongoose');

const brochureDownloadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  downloadedAt: {
    type: Date,
    default: Date.now
  }
});

const BrochureDownload = mongoose.model('BrochureDownload', brochureDownloadSchema);

module.exports = BrochureDownload;
