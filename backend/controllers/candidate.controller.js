

const Candidate = require("../models/candidate.modal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");  // ✅ Import jwt

exports.saveCandidateData = async (req, res) => {
  try {
    const { name, gender, mobile, email, password, city, locality, functionalArea, qualification, role, skills, resumeHeadline, dob, industry, basicEducation, masterEducation, phdEducation } = req.body;
    const resumePath = req.file ? `/uploads/${req.file.filename}` : null;

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const candidate = new Candidate({
      name,
      gender,
      mobile,
      email,
      password: hashedPassword,
      city,
      locality,
      functionalArea,
      qualification,
      role,
      resumePath,
      skills,
      resumeHeadline,
      dob,
      industry,
      basicEducation,
      masterEducation,
      phdEducation
    });

    await candidate.save();
    res.status(201).json({ message: "Candidate saved successfully", candidate });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error: error.message });
  }
};

exports.loginCandidate = async (req, res) => {
  const { email, mobile, password } = req.body;

  try {
    const candidate = await Candidate.findOne({
      $or: [{ email }, { mobile }]
    });

    if (!candidate) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, candidate.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = {
      id: candidate._id,
      email: candidate.email,
      mobile: candidate.mobile,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
      candidate: {
        id: candidate._id,
        name: candidate.name,
        email: candidate.email,
        mobile: candidate.mobile,
      },
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
