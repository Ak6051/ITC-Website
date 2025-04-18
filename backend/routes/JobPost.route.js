const express = require('express');
const router = express.Router();
const Job = require('../models/JobPost.model'); // Job Model import karna na bhule
const mongoose = require('mongoose');

// Job Post API (Without Token)
router.post('/post-job', async (req, res) => {
  try {
    const {
      title,
      department,
      numberOfOpenings,
      jobType,
      salary,
      educationalQualification,
      experienceRequired,
      jobLocation,
      description,
      postedByRole,
    } = req.body;
    // Naya Job Object Create Karo
    const newJob = new Job({
      jobId: new mongoose.Types.ObjectId().toString(),
      title,
      department,
      numberOfOpenings,
      jobType,
      salary,
      educationalQualification,
      experienceRequired,
      jobLocation,
      description,
      postedByRole,
    });

    // Job MongoDB me Save Karo
    await newJob.save();

    res.status(201).json({ message: 'Job posted successfully!', job: newJob });
  } catch (error) {
    console.error('Error posting job:', error);
    res.status(500).json({ message: 'Server Error!' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/toggle-status/:id', async (req, res) => {
  try {
    const jobId = req.params.id;

    // ✅ Pehle job find karo
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // ✅ Agar "active" hai toh "closed" karo, warna "active" karo
    const newStatus = job.status === 'active' ? 'closed' : 'active';

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { status: newStatus },
      { new: true }
    );

    res.json({ message: `Job ${newStatus} successfully`, job: updatedJob });
  } catch (error) {
    console.error('Error toggling job status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/openings-count', async (req, res) => {
  try {
    const activeJobs = await Job.find({ status: 'active' }); // ✅ Only count active jobs
    const openingsCount = activeJobs.reduce(
      (sum, job) => sum + job.numberOfOpenings,
      0
    );

    res.json({ openings: openingsCount });
  } catch (error) {
    console.error('Error fetching job openings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/delete-job/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ message: 'Job deleted successfully', deletedJob });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
