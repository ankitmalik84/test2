const mongoose = require('mongoose');

const caseStudyDownloadSchema = new mongoose.Schema({
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

const CaseStudyDownload = mongoose.model('CaseStudyDownload', caseStudyDownloadSchema);

module.exports = CaseStudyDownload;
