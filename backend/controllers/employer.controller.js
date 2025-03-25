



const Employer = require("../models/employer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require('../utils/emailService');

// Employer Registration
const registerEmployer = async (req, res) => {
  try {
    const { name, companyName, email, mobileNo, location, password } = req.body;

    // Check if employer already exists
    
    const existingEmployer = await Employer.findOne({ email });
    if (existingEmployer) {
      return res.status(400).json({ message: "Employer already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new employer
    const newEmployer = new Employer({
      name,
      companyName,
      email,
      mobileNo,
      location,
      password: hashedPassword,
      jobs: []
    });

    await newEmployer.save();

    // Generate JWT Token
    const token = jwt.sign({ id: newEmployer._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "Employer registered successfully",
      employerId: newEmployer._id,
      token,
    });

        // Email Content
    const emailContent = `
      <h2>New Employer Registered</h2>
      <p><strong>Name:</strong> ${newEmployer.name}</p>
      <p><strong>Company Name:</strong> ${newEmployer.companyName}</p>
      <p><strong>Mobile No:</strong> ${newEmployer.mobileNo}</p>
      <p><strong>Email:</strong> ${newEmployer.email}</p>
      <p><strong>Location:</strong> ${newEmployer.location}</p>
      <p><strong>Registered At:</strong> ${new Date(newEmployer.createdAt).toLocaleString()}</p>
    `;

    const subject = 'New Employer Registered';

    // Send Email with Current Employer's Details
    await sendEmail(subject, emailContent);


  } catch (error) {
    res.status(500).json({ message: "Error registering employer", error: error.message });
  }
};

// Employer Login
const loginEmployer = async (req, res) => {
  try {
    const { mobileNo, password } = req.body;
    const employer = await Employer.findOne({ mobileNo });

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, employer.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: employer._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // console.log("Generated Token:", token); // Debugging

    res.status(200).json({
      message: "Login Successful",
      employerId: employer._id,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};



const addJob = async (req, res) => {
  try {
    // Extract token from headers
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // Verify employer from token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const employer = await Employer.findById(decoded.id);
    
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    // Add new job to employer's jobs array
    const { title, requirement,experience, description, status } = req.body;
    const newJob = {
      title,
      requirement,
      experience,
      description,
      
      status: status || "active",
    };

    employer.jobs.push(newJob);
    await employer.save();

    res.status(200).json({ message: "Job added successfully", employer });
  } catch (error) {
    res.status(500).json({ message: "Error adding job", error: error.message });
  }
};

module.exports = { registerEmployer, loginEmployer, addJob };
