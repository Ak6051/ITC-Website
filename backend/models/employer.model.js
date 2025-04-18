const mongoose = require("mongoose");


const JobSchema = new mongoose.Schema({
  jobId: { type: String, required: true }, // Unique Job ID
  title: { type: String, required: true },
  department: { type: String, required: true },    // Replacing `requirement`
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
  status: { type: String, enum: ["active", "closed"], default: "active" },

},
{ timestamps: true }
);

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: true },
  companyAddress: { type: String, required: true },
  password: { type: String, required: true },
  otp: { type: Number },
  otpExpires: { type: Date },
  createdAt: { type: Date, default: Date.now },
  jobs: [JobSchema]   // Jobs array employer ke under store hoga
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
