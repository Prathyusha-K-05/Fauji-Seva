const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  eligibility: {
    designation: String,
    branch: String,
    retiredOnly: Boolean
  },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Scheme', schemeSchema);

