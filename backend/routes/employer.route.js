const express = require('express');
const router = express.Router();
const { registerEmployer, loginEmployer , getEmployers } = require('../controllers/employer.controller');

// Register Route
router.post('/register', registerEmployer);

// Login Route
router.post('/login', loginEmployer);

router.get('/fetch-employer' , getEmployers)

module.exports = router;
