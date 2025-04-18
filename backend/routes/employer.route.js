
const express = require('express');
const { registerEmployer, loginEmployer, addJob } = require('../controllers/employer.controller');
const verifyToken = require('../middleware/employer.middleware');
const User = require("../models/employer.model"); 
const router = express.Router();
const jwt = require("jsonwebtoken");

// Employer Registration & Login Routes
router.post('/register', registerEmployer);
router.post('/login', loginEmployer);
router.post('/add-job', verifyToken, addJob); // Protected route

// Middleware to verify token
const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: "Access Denied. No Token Provided" });
    }

    const token = authHeader.split(" ")[1]; // Extract token

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET is correct
        req.user = decoded; // Attach decoded user data to req.user
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid Token", error: error.message });
    }
};

// ✅ Corrected Fetch Employer Jobs Route
router.get("/employer-jobs", authenticateToken, async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Unauthorized access: No employer ID found" });
        }

        // 🛠 Find Employer by ID, not email (use JWT payload 'id')
        const user = await User.findById(req.user.id); 

        if (!user) {
            return res.status(404).json({ message: "Employer not found" });
        }

        res.status(200).json({ jobs: user.jobs });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Employer ke jobs fetch karne ka API
router.get("/all-jobs", async (req, res) => {
    try {
        const users = await User.find({}, "name companyName mobileNo email companyAddress jobs")
            .lean(); // Using lean for better performance

        let allJobs = [];

        users.forEach(user => {
            user.jobs.forEach(job => {
                allJobs.push({
                    // Job Details
                    title: job.title,
                    department: job.department,
                    numberOfOpenings: job.numberOfOpenings,
                    jobType: job.jobType,
                    salary: job.salary,
                    educationalQualification: job.educationalQualification,
                    experienceRequired: job.experienceRequired,
                    jobLocation: job.jobLocation,
                    description: job.description,
                    status: job.status,
                    
                    // Employer Details
                    employerName: user.name,
                    companyName: user.companyName,
                    mobileNo: user.mobileNo,
                    email: user.email,                // ✅ Added email field
                    companyAddress: user.companyAddress
                });
            });
        });

        res.status(200).json(allJobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Delete a specific job
router.delete("/delete-job/:userId/:jobId", async (req, res) => {
    const { userId, jobId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Filter out the job to be deleted
        user.jobs = user.jobs.filter(job => job._id.toString() !== jobId);

        await user.save();
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});



module.exports = router;
