const express = require("express");
const router = express.Router();
const Job = require("../models/JobPost.model");

// Search API
router.get("/search", async (req, res) => {
  try {
    const { title, jobLocation, experienceRequired } = req.query;

    let query = {};

    // Case-insensitive regex for title
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    // Case-insensitive regex for jobLocation
    if (jobLocation) {
      query.jobLocation = { $regex: jobLocation, $options: "i" };
    }

    // Exact match for experienceRequired
    if (experienceRequired) {
      query.experienceRequired = experienceRequired;
    }

    // Fetch jobs directly
    const jobs = await Job.find(query);

    res.json({ success: true, jobs });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
