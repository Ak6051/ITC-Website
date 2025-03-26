const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  otp: { type: String },                  // OTP field
  otpExpires: { type: Date }              // OTP expiry time
});

const User = mongoose.model('Recruiter', userSchema);
module.exports = User;