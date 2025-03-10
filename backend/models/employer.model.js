// const mongoose = require('mongoose');

// const employerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   companyName: { type: String, required: true },
//   mobileNo: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   requirement: { type: String, required: true },
//   location:{type:String , required:true},
//   password: { type: String, required: true }
// }, { timestamps: true });

// module.exports = mongoose.model('Employer', employerSchema);
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  requirement: { type: String, required: true },
  experience: { type: String, required: false }, 
  description: { type: String, required: true },
  status: { type: String, enum: ["active", "closed"], default: "active" }
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
  jobs: [JobSchema] // Jobs array employer ke under store hoga
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
