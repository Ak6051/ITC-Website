// const express = require('express');
// const { registerEmployer, loginEmployer, addJob } = require('../controllers/employer.controller');
// const verifyToken = require('../middleware/employer.middleware');
// const User = require("../models/employer.model"); // Model import karo
// const router = express.Router();
// const jwt = require("jsonwebtoken");


// router.post('/register', registerEmployer);
// router.post('/login', loginEmployer);
// router.post('/add-job', verifyToken, addJob); // Protected route


// //middleware verify

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.header("Authorization");
//     if (!authHeader) {
//         return res.status(401).json({ message: "Access Denied. No Token Provided" });
//     }

//     const token = authHeader.split(" ")[1]; // Extract token

//     if (!token) {
//         return res.status(401).json({ message: "Token missing" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual secret key
//         req.user = decoded; // Attach decoded user data to req.user
//         next();
//     } catch (error) {
//         res.status(400).json({ message: "Invalid Token", error: error.message });
//     }
// };



// router.get("/employer-jobs", authenticateToken, async (req, res) => {
//     try {
//         if (!req.user || !req.user.email) {
//             return res.status(401).json({ message: "Unauthorized access" });
//         }

//         const user = await User.findOne({ email: req.user.email });

//         if (!user) {
//             return res.status(404).json({ message: "Employer not found" });
//         }

//         res.status(200).json({ jobs: user.jobs });
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// });

// module.exports = router;
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
        const users = await User.find({}, "jobs companyName location mobileNo name"); // Fetch jobs with employer details
        let allJobs = [];

        // Extract jobs from all employers
        users.forEach(user => {
            user.jobs.forEach(job => {
                allJobs.push({
                    title: job.title,
                    requirement: job.requirement,
                    experience: job.experience,
                    description: job.description,
                    status: job.status,
                    companyName: user.companyName,
                    location: user.location,
                    mobileNo: user.mobileNo,
                    employerName: user.name
                });
            });
        });

        res.status(200).json(allJobs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


module.exports = router;
