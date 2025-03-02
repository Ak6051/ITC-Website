const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  mobileNo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  requirement: { type: String, required: true },
  location:{type:String , required:true},
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Employer', employerSchema);
