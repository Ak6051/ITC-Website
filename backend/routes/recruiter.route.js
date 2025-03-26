
const express = require('express');
const JobPost = require("../models/recruiterjobpost.modal");

const { registerUser, loginUser,forgotPassword , resetPassword} = require('../controllers/recruiter.controller');
const verifyToken = require('../middleware/recruiter.middleware'); // Import middleware

const router = express.Router();

router.post('/recruiter-register', registerUser);
router.post('/recruiter-login', loginUser);
router.post('/forgot-password', forgotPassword);  // OTP generate and send email
router.post('/reset-password', resetPassword);    // Reset password with OTP

// Protect this route with verifyToken middleware
router.get('/protected-route', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Access granted to protected route' });
});

// Store job data (POST API)
router.post("/job", async (req, res) => {
  try {
    const newJob = new JobPost(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job post created successfully", job: newJob });
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

module.exports = router;
