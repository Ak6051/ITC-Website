// const express = require( "express");
// const { saveCandidateData } = require("../controllers/candidate.controller");

// const router = express.Router();
// router.post("/save", saveCandidateData);

// module.exports= router;
const express = require("express");
const { saveCandidateData } = require("../controllers/candidate.controller");
const upload = require("../middleware/upload"); 

const router = express.Router();

// ✅ Candidate Registration with Resume Upload
router.post("/save", upload.single("resume"), saveCandidateData);


module.exports = router;
