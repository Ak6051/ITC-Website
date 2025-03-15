const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/recruiter.middleware');
const Recruiter = require('../models/recruiter.model');
const bcrypt = require("bcryptjs"); 

// Get Recruiter Profile
router.get('/profile', verifyToken, async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ email: req.user.email }).select("-password");

        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }

        res.json(recruiter);
    } catch (error) {
        console.error("Error fetching recruiter:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.put('/update', verifyToken, async (req, res) => {
    try {
        const { name, email, mobile, location } = req.body;
        const recruiter = await Recruiter.findOneAndUpdate(
            { email: req.user.email },
            { name, email, mobile, location },
            { new: true, runValidators: true, select: "-password" }
        );

        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }

        res.json({ message: "Profile updated successfully", recruiter });
    } catch (error) {
        console.error("Error updating recruiter:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.put("/change-password", verifyToken, async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;

        // 1. Find recruiter by email
        const recruiter = await Recruiter.findOne({ email: req.user.email });

        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }

        // 2. Compare old password with stored hashed password
        const isMatch = await bcrypt.compare(oldPassword, recruiter.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Old password is incorrect" });
        }

        // 3. Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // 4. Update password in database
        recruiter.password = hashedPassword;
        await recruiter.save();

        res.json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
