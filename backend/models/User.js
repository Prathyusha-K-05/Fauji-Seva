const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  serviceId: { type: String, unique: true },
  role: { type: String, enum: ['admin', 'military'], default: 'military' },
  designation: String,
  branch: String,
  retired: Boolean
});

module.exports = mongoose.model('User', userSchema);
