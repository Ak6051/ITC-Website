// const Candidate = require ("../models/candidate.modal");
// const path = require("path");

// // exports. saveCandidateData = async (req, res) => {
// //   try {
// //     const candidate = new Candidate(req.body);
// //     await candidate.save();
// //     res.status(201).json({ message: "Data saved successfully", candidate });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error saving data", error: error.message });
// //   }
// // };
// exports.saveCandidateData = async (req, res) => {
//   try {
//     const { name, gender, mobile, email, password, city, locality, functionalArea, qualification, role, skills, resumeHeadline, dob , industry, basicEducation, masterEducation, phdEducation } = req.body;
//     const resumePath = req.file ? `/uploads/${req.file.filename}` : null; // ✅ Store local file path

//     const candidate = new Candidate({
//       name,
//       gender,
//       mobile,
//       email,
//       password,
//       city,
//       locality,
//       functionalArea,
//       qualification,
//       role,
//       resumePath, // ✅ Store local path in DB
//       skills,
//       resumeHeadline,
//       dob , 
//       industry, 
//       basicEducation, 
//       masterEducation, 
//       phdEducation 
//     });

//     await candidate.save();
//     res.status(201).json({ message: "Candidate saved successfully", candidate });
//   } catch (error) {
//     res.status(500).json({ message: "Error saving data", error: error.message });
//   }
// };

const Candidate = require("../models/candidate.modal");
const bcrypt = require("bcryptjs");

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
      password: hashedPassword, // Store hashed password
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
