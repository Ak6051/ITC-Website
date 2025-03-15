const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: String,
    gender: String,
    mobile: String,
    email: String,
    password: String,
    city: String,
    locality: String,
    functionalArea: String,
    qualification: String,
    role: String,
    resumePath: String, // ✅ Resume file ka local path
    skills: String,
    resumeHeadline: String,
    dob: String,
    industry:String,
    basicEducation:String,
    masterEducation:String,
    phdEducation:String,


  },
  { timestamps: true }
);

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
