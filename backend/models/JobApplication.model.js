// models/AppliedJob.js
const mongoose = require("mongoose");

const appliedJobSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
  jobId: { type: mongoose.Schema.Types.String },
  appliedDate: { type: Date, default: Date.now }, // ✅ New field added

});

module.exports = mongoose.model("AppliedJob", appliedJobSchema);
