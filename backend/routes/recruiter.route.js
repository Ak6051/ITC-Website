// const express = require('express');
// const { registerUser , loginUser } = require('../controllers/recruiter.controller');

// const router = express.Router();

// // Register Route
// router.post('/recruiter-register', registerUser);
// router.post('/recruiter-login', loginUser);

// module.exports = router;
const express = require('express');
const JobPost = require("../models/recruiterjobpost.modal");

const { registerUser, loginUser } = require('../controllers/recruiter.controller');
const verifyToken = require('../middleware/recruiter.middleware'); // Import middleware

const router = express.Router();

router.post('/recruiter-register', registerUser);
router.post('/recruiter-login', loginUser);

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
