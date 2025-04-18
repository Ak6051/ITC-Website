const express = require('express');
const {upload} = require('../middleware/upload');
const { registerUser,loginUser } = require('../controllers/candidate.controller');
const Candidate = require('../models/candidate.modal');

const router = express.Router();

router.post('/register', upload.single('resume'), registerUser);
router.post('/login', loginUser);
router.get("/fetch", async (req, res) => {
    try {
      const candidates = await Candidate.find();
      res.json(candidates);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

router.put("/update/:id", async (req, res) => {
  try {
    const updated = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/delete/:id", async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
