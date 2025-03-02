// const express = require('express');
// const { registerUser , loginUser } = require('../controllers/recruiter.controller');

// const router = express.Router();

// // Register Route
// router.post('/recruiter-register', registerUser);
// router.post('/recruiter-login', loginUser);

// module.exports = router;
const express = require('express');
const { registerUser, loginUser } = require('../controllers/recruiter.controller');
const verifyToken = require('../middleware/recruiter.middleware'); // Import middleware

const router = express.Router();

router.post('/recruiter-register', registerUser);
router.post('/recruiter-login', loginUser);

// Protect this route with verifyToken middleware
router.get('/protected-route', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Access granted to protected route' });
});

module.exports = router;
