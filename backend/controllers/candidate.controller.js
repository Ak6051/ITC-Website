
const bcrypt = require('bcryptjs');
const Candidate = require('../models/candidate.modal');
const jwt = require('jsonwebtoken');
const { getResumeUrl } = require('../middleware/upload');



const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNo, password } = req.body;
    const resume = req.file ? getResumeUrl(req.file.path) : null;

    const existingUser = await Candidate.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Candidate({
      firstName,
      lastName,
      email,
      mobileNo,
      password: hashedPassword,
      resume
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { mobileNo, password } = req.body;
    const user = await Candidate.findOne({ mobileNo });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser,loginUser };
