const jwt = require("jsonwebtoken");   // ✅ jwt ko import karein
const dotenv = require("dotenv");

dotenv.config();   // ✅ .env config load kar rahe hain

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // ✅ Token verify kar rahe hain
    req.user = decoded;  // ✅ User ko req object me store kar rahe hain
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
