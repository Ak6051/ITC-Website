const express = require("express");
const router = express.Router();
const { applyForJob  } = require("../controllers/JobApplication.controller");
const AppliedJob = require("../models/JobApplication.model");
const Job = require("../models/JobPost.model");
const Candidate = require("../models/candidate.modal");


router.post("/apply", applyForJob);

router.get("/applied-jobs", async (req, res) => {
    try {
      const appliedJobs = await AppliedJob.find()
        .populate("candidateId", "firstName lastName email mobileNo resume ")
        .populate({
          path: "jobId",
          model: "job",
        });
  
      res.json(appliedJobs);
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

module.exports = router;
