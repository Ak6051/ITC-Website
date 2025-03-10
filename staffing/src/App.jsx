
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './Pages/Home';

// import JobPostForm from './components/JobPostForm';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import RecruiterPage from './components/RecruiterPage';
// import ProfilePage from './components/ProfilePage';
// import Layout from './Pages/Layout';
// import EmployerDashboard from './components/Employer panel/EmployerDashboard';
// import EmployerRegister from './components/Employer panel/EmployerRegister';
// import EmployerLogin from './components/Employer panel/EmployerLogin';
// import EmployerFormData from './components/EmployerFormData';
// import About from './Pages/About';
// import Services from './Pages/Service';
// import ContactUs from './Pages/contactUs';



// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/jobpost" element={<JobPostForm />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/recruiter" element={<RecruiterPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/employer-dashboard" element={<EmployerDashboard />} />
//           <Route path="/employer-register" element={<EmployerRegister />} />
//           <Route path="/employer-login" element={<EmployerLogin />} />
//           <Route path="/employerUpdate" element={<EmployerFormData />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/service" element={<Services />} />
//           <Route path="/contactUs" element={<ContactUs />} />




//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import JobPostForm from './components/JobPostForm';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RecruiterPage from './components/RecruiterPage';
import ProfilePage from './components/ProfilePage';
import Layout from './Pages/Layout';
import EmployerDashboard from './components/Employer panel/EmployerDashboard';
import EmployerRegister from './components/Employer panel/EmployerRegister';
import EmployerLogin from './components/Employer panel/EmployerLogin';
import EmployerFormData from './components/EmployerFormData';
import About from './Pages/About';
import Services from './Pages/Service';
import ContactUs from './Pages/contactUs';

// Import protected routes
import RecruiterProtectedRoute from "./components/RecruiterProtectedRoute";
import EmployerProtectedRoute from "./components/EmployerProtectedRoute";
import EmployerJobList from './components/Employer panel/EmployerJobList';
import PracticeArea from './components/PracticeArea';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobpost" element={<JobPostForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recruiter" element={<RecruiterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/employer-register" element={<EmployerRegister />} />
          <Route path="/employer-login" element={<EmployerLogin />} />
          <Route path="/employerUpdate" element={<EmployerFormData />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/employer-jobs" element={<EmployerJobList />} />
          <Route path="/practice-areas" element={<PracticeArea />} />


          {/* ✅ Employer ke liye protected route */}
          <Route element={<EmployerProtectedRoute allowedRoles={["employer"]} />}>
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          </Route>

          {/* ✅ Recruiter ke liye protected route */}
          <Route element={<RecruiterProtectedRoute allowedRoles={["recruiter"]} />}>
            <Route path="/recruiter" element={<RecruiterPage />} />
          </Route>

          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
