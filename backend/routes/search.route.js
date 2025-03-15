const express = require("express");
const router = express.Router();
const User = require("../models/employer.model");

// Search API
router.get("/search", async (req, res) => {
    try {
        const { requirement, location, experience } = req.query;
    
        console.log("Query Parameters:", requirement, location, experience); // 🔍 Debug
    
        if (!requirement || !location || !experience) {
          return res.status(400).json({ error: "Missing query parameters" });
        }
    
        const jobs = await Job.aggregate([
          { $unwind: "$jobs" }, // ✅ Flatten jobs array
          {
            $match: {
              "jobs.requirement": { $regex: new RegExp(requirement, "i") }, // ✅ Case-insensitive
              "jobs.experience": experience, // ✅ Exact match
              location: { $regex: new RegExp(location, "i") }, // ✅ Case-insensitive
            },
          },
          {
            $project: {
              _id: 0,
              "jobs.title": 1,
              "jobs.requirement": 1,
              "jobs.experience": 1,
              "jobs.description": 1,
              "jobs.status": 1,
            },
          },
        ]);
    
        console.log("Search Results:", jobs); // 🔍 Debug Output
    
        res.json(jobs);
      } catch (error) {
        console.error("Error:", error); // 🔴 Print Full Error
        res.status(500).json({ error: "Internal Server Error", details: error.message });
      }
    })

module.exports = router;
