const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const employerRoutes = require('./routes/employer.route');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employer', employerRoutes);
app.use('/api/recruiter', require('./routes/recruiter.route'))

// MongoDB Connection
mongoose.connect(process.env.Mongo_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    app.listen(5000, '0.0.0.0', () => console.log('Server running on port 5000'));
})
.catch(err => console.log('MongoDB connection error:', err));
