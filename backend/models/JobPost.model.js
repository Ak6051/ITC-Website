const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  jobId: { type: String, required: true }, 
  title: { type: String, required: true },
  department: { type: String, required: true },
  numberOfOpenings: { type: Number, required: true },
  jobType: { type: String, enum: ["Full-time", "Part-time", "Contract"], required: true },
  salary: { type: String, required: true },
  educationalQualification: { 
    type: String, 
    enum: ["SSC", "HSC", "Graduate", "Post Graduate", "Diploma", "Other"],
    required: true 
  },
  experienceRequired: { 
    type: String, 
    enum: ["Fresher", "1-3 Years", "3-5 Years", "5+ Years"],
    required: true 
  },
  jobLocation: { type: String, required: true },
  description: { type: String, required: true },
  postedByRole: {
    type: String,
    enum: ["recruiter", "employer"],
    required: true,
  },
  
  status: { type: String, enum: ["active", "closed"], default: "active" },
}, { timestamps: true });

const Job = mongoose.model('job', userSchema);
module.exports = Job;
