const express = require("express");
const router = express.Router();
const User = require("../models/employer.model");

// Search API
router.get("/search", async (req, res) => {
  try {
    const { requirement, location, experience } = req.query;

    let query = {};

    if (location) {
      query.location = { $regex: location, $options: "i" }; // Case-insensitive search
    }

    const users = await User.find(query).populate("jobs");

    let jobs = [];

    users.forEach((user) => {
      user.jobs.forEach((job) => {
        if (
          (!requirement || job.requirement.toLowerCase().includes(requirement.toLowerCase())) &&
          (!experience || job.experience === experience)
        ) {
          jobs.push({
            employer: user.name,
            company: user.companyName,
            location: user.location,
            title: job.title,
            requirement: job.requirement,
            experience: job.experience,
            description: job.description,
            status: job.status,
          });
        }
      });
    });

    res.json({ success: true, jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
