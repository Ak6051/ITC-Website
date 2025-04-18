
const Employer = require("../models/employer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require('../utils/emailService');
const mongoose = require("mongoose");

// Employer Registration
const registerEmployer = async (req, res) => {
  try {
    const { name, companyName, email, mobileNo, companyAddress, password } = req.body;

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
      companyAddress,
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
      <p><strong>Company Address:</strong> ${newEmployer.companyAddress}</p>
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
    const employer = await Employer.findById(req.employerId);

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    const { title, department, numberOfOpenings, jobType, salary, educationalQualification, experienceRequired, jobLocation, description } = req.body;

    // Required fields validation
    if (!title || !department || !numberOfOpenings || !jobType || !salary || !educationalQualification || !experienceRequired || !jobLocation || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Creating new job with employer ID
    const newJob = {
      jobId: new mongoose.Types.ObjectId().toString(), // 👈 Unique jobId generate ho raha hai
      title,
      department,
      numberOfOpenings,
      jobType,
      salary,
      educationalQualification,
      experienceRequired,
      jobLocation,
      description,
      // postedBy: employer._id // 👈 Employer ka ID bhi store hoga
    };

    employer.jobs.push(newJob);
    await employer.save();

    // Getting newly created job's ID
    const jobId = employer.jobs[employer.jobs.length - 1]._id;

    res.status(201).json({ message: "Job added successfully", jobId, employerId: employer._id });
  } catch (error) {
    res.status(500).json({ message: "Error adding job", error: error.message });
  }
};

module.exports = { registerEmployer, loginEmployer, addJob };
