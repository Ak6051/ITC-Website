const User = require("../models/employer.model");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Employer Profile Fetch API
const getEmployerProfile = async (req, res) => {
  try {
    const employer = await User.findById(req.employerId).select("-password"); // Hide password from response
    if (!employer) return res.status(404).json({ message: "Employer not found" });

    res.json(employer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = crypto.randomInt(100000, 999999);
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes validity
    await user.save();

    // Send OTP via Email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "raianku6051@gmail.com", pass: "mmpb lbrw fmfa natu" }
    });

    await transporter.sendMail({
      from: "raianku6051@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}`
    });

    res.json({ message: "OTP sent to your email" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { getEmployerProfile ,sendOTP };
