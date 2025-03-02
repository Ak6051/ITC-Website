const User = require('../models/recruiter.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register User
const registerUser = async (req, res) => {
  const { name, email, mobile,password, location } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, mobile,password:hashedPassword, location });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// const loginUser = async (req, res) => {
//     const { mobile, email, password } = req.body;

//     try {
//         let user;
//         if (mobile) {
//             user = await User.findOne({ mobile });
//         } else if (email) {
//             user = await User.findOne({ email });
//         }

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         // Token generation (optional)
//         const token = "dummy-token"; // JWT token generate karna ho toh yahan add karo

//         res.status(200).json({ token, message: 'Login successful' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };
  


const loginUser = async (req, res) => {
  const { mobile, email, password } = req.body;

  try {
    let user;
    if (mobile) {
      user = await User.findOne({ mobile });
    } else if (email) {
      user = await User.findOne({ email });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate Token
    const token = jwt.sign(
      { userId: user._id, email: user.email, mobile: user.mobile },
      'your_secret_key',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};



module.exports = { registerUser , loginUser };
