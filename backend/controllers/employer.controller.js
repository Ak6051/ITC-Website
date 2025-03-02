const Employer = require('../models/employer.model');
const bcrypt = require('bcryptjs');
const { sendEmail } = require('../utils/emailService');

// Register Employer
exports.registerEmployer = async (req, res) => {
  try {
    const { name, companyName, mobileNo, email, requirement,location, password } = req.body;

    // Employer Creation
    const newEmployer = new Employer({
      name,
      companyName,
      mobileNo,
      email,
      requirement,
      location,
      password
    });

    await newEmployer.save();
    res.status(201).json({ message: 'Employer registered successfully' });

    // Email Content
    const emailContent = `
      <h2>New Employer Registered</h2>
      <p><strong>Name:</strong> ${newEmployer.name}</p>
      <p><strong>Company Name:</strong> ${newEmployer.companyName}</p>
      <p><strong>Mobile No:</strong> ${newEmployer.mobileNo}</p>
      <p><strong>Email:</strong> ${newEmployer.email}</p>
      <p><strong>Requirement:</strong> ${newEmployer.requirement}</p>
      <p><strong>Location:</strong> ${newEmployer.location}</p>
      <p><strong>Registered At:</strong> ${new Date(newEmployer.createdAt).toLocaleString()}</p>
    `;

    const subject = 'New Employer Registered';

    // Send Email with Current Employer's Details
    await sendEmail(subject, emailContent);

  } catch (error) {
    res.status(500).json({ error: 'Failed to register employer' });
    console.error('Register Error:', error);
  }
};

// Login Employer
exports.loginEmployer = async (req, res) => {
  try {
    const { mobileNo, password } = req.body;
    const employer = await Employer.findOne({ mobileNo });

    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, employer.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid Password' });
    }

    res.status(200).json({ message: 'Login Successful', employerId: employer._id });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getEmployers = async (req, res) => {
  try {
    const employers = await Employer.find({}, 'name companyName mobileNo email requirement location createdAt updatedAt');
    res.status(200).json(employers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employers', error });
  }
};
