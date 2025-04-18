
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  mobileNo: { type: String, unique: true, required: true, },
  password: { type: String, required: true },
  resume: { type: String, required: false },  // Resume file path
  createdAt: { type: Date, default: Date.now }
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
