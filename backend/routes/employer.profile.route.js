const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { getEmployerProfile ,sendOTP} = require("../controllers/employer.profile.controller");
const verifyToken = require("../middleware/employer.middleware");
const User = require("../models/employer.model");


router.get("/profile", verifyToken, getEmployerProfile);
router.post("/forgot-password", sendOTP);

router.put("/update", verifyToken, async (req, res) => {
    try {
      const updatedData = req.body;
      const employer = await User.findByIdAndUpdate(req.employerId, updatedData, { new: true }).select("-password");
      res.json(employer);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });

  router.put("/change-password", verifyToken, async (req, res) => {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body;
  
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: "New password and confirm password do not match" });
      }
  
      const employer = await User.findById(req.employerId);
      if (!employer) return res.status(404).json({ message: "Employer not found" });
  
      const isMatch = await bcrypt.compare(oldPassword, employer.password);
      if (!isMatch) return res.status(400).json({ message: "Old password is incorrect" });
  
      const salt = await bcrypt.genSalt(10);
      employer.password = await bcrypt.hash(newPassword, salt);
      await employer.save();
  
      res.json({ message: "Password changed successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
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
  
  

module.exports = router;
