
// const express = require("express");
// const { saveCandidateData } = require("../controllers/candidate.controller");
// const upload = require("../middleware/upload"); 

// const router = express.Router();

// // ✅ Candidate Registration with Resume Upload
// router.post("/save", upload.single("resume"), saveCandidateData);


// module.exports = router;
const express = require("express");
const { saveCandidateData, loginCandidate } = require("../controllers/candidate.controller");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Candidate Registration
router.post("/save", upload.single("resume"), saveCandidateData);

// ✅ Candidate Login
router.post("/login", loginCandidate);

// ✅ Protected Route (example)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Protected data accessed!", user: req.user });
});

module.exports = router;
