const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");

const dotenv = require('dotenv');
const employerRoutes = require('./routes/employer.route');
const candidateRoutes = require( "./routes/candidate.route");
const recruiterProfile = require('./routes/recruiter.profile');
const searchRoutes = require('./routes/search.route')
const employerProfileRoute = require('./routes/employer.profile.route')
const applicationRoutes = require("./routes/JobApplication.route");
const jobRoutes = require("./routes/JobPost.route"); // Import Job Routes

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // ✅ Serve static files

// Routes
app.use('/api/employer', employerRoutes);
app.use('/api/fetch', recruiterProfile);
app.use('/api/job' ,searchRoutes)
app.use('/api/recruiter', require('./routes/recruiter.route'))
app.use("/api/candidate", candidateRoutes);
app.use("/api/employerProfile", employerProfileRoute);
app.use("/api/applications", applicationRoutes);
app.use("/api/jobs", jobRoutes);  // Job Route Add Karo



// MongoDB Connection
mongoose.connect(process.env.Mongo_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    app.listen(5000,  () => console.log('Server running on port 5000'));
})
.catch(err => console.log('MongoDB connection error:', err));
