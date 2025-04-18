
const express = require('express');
const bcrypt = require("bcryptjs");
const JobPost = require("../models/recruiterjobpost.modal");
const User = require('../models/recruiter.model');
const { registerUser, loginUser,forgotPassword } = require('../controllers/recruiter.controller');
const verifyToken = require('../middleware/recruiter.middleware'); // Import middleware
const mongoose = require("mongoose");

const router = express.Router();

router.post('/recruiter-register', registerUser);
router.post('/recruiter-login', loginUser);
router.post('/forgot-password', forgotPassword);  // OTP generate and send email
// router.post('/reset-password', resetPassword);    // Reset password with OTP

// Protect this route with verifyToken middleware
router.get('/protected-route', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Access granted to protected route' });
});

// Store job data (POST API)
router.post("/job", async (req, res) => {
  try {
    const { title, department, numberOfOpenings, jobType, salary, educationalQualification, experienceRequired, jobLocation, description } = req.body;

    // Job ID manually generate karein
    const newJob = new JobPost({
      jobId:new mongoose.Types.ObjectId().toString(), // 👈 Unique Job ID
      title,
      department,
      numberOfOpenings,
      jobType,
      salary,
      educationalQualification,
      experienceRequired,
      jobLocation,
      description,
      status: "active"
      
    });

    await newJob.save();
    res.status(201).json({ message: "Job posted successfully", job: newJob });

  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }}
);


router.get("/all", async (req, res) => {
  try {
    const jobs = await JobPost.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const jobs = await JobPost.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email, otp, otpExpires: { $gt: Date.now() } });
  
    if (!user) {
      return res.status(400).json({ message: "Invalid OTP or expired" });
    }
  
    res.json({ message: "OTP Verified! You can reset your password now" });
  });

  
  router.post("/reset-password", async (req, res) => {
    try {
      const { email, newPassword } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      // **Hash new password using bcrypt**
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
      user.otp = undefined; 
      user.otpExpires = undefined;
  
      await user.save();
  
      res.json({ message: "Password reset successful!" });
    } catch (error) {
      console.error("Reset Password Error:", error);
      res.status(500).json({ message: "Server error, try again later." });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const recruiters = await User.find();
      res.json(recruiters);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

router.put("/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
