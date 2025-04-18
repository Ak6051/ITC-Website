const Candidate = require('../models/candidate.modal');
const ApplyJob = require('../models/JobApplication.model');
const Job = require('../models/JobPost.model'); // ✅ Updated to single job model

exports.applyForJob = async (req, res) => {
  const { mobile, jobId } = req.body;

  try {
    // ✅ Check if candidate exists
    const candidate = await Candidate.findOne({ mobileNo: mobile.trim() });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not registered' });
    }

    // ✅ Check if already applied
    const alreadyApplied = await ApplyJob.findOne({
      candidateId: candidate._id,
      jobId,
    });

    if (alreadyApplied) {
      return res.status(400).json({ message: 'Already applied for this job' });
    }

    // ✅ Check if job exists in Job model
    const jobExists = await Job.findById(jobId);
    if (!jobExists) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // ✅ Save job application
    const application = new ApplyJob({
      candidateId: candidate._id,
      jobId,
    });

    await application.save();

    return res.status(200).json({ message: 'Job applied successfully' });
  } catch (error) {
    console.error('Apply error:', error);
    return res.status(500).json({ message: 'Server error', error });
  }
};
