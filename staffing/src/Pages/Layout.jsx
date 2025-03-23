// // src/Pages/Layout.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from './Navbar';
// import RecruiterNavbar from './RecruiterNavbar';
// import EmployerNavbar from '../components/Employer panel/EmployerNavbar';
// import Footer from './Footer';

// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Routes for different navbars
//   const recruiterPages = ['/recruiter', '/profile', '/employerUpdate' , '/jobpost', '/manageJob','/change-password'];
//   const employerPages = ['/employer-dashboard','/employer-jobs'];

//   const isEmployerNavbar = employerPages.some(path => location.pathname.startsWith(path));
//   const isRecruiterNavbar = recruiterPages.some(path => location.pathname.startsWith(path));

//   return (
//     <>
//       {isEmployerNavbar ? (
//         <EmployerNavbar />
//       ) : isRecruiterNavbar ? (
//         <RecruiterNavbar />
//       ) : (
//         <Navbar />
//       )}
//       {children}
//       <Footer />
//     </>
//   );
// };

// export default Layout;


import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import RecruiterNavbar from "./RecruiterNavbar";
import EmployerNavbar from "../components/Employer panel/EmployerNavbar";
import UserNavbar from "../components/User-Panel/UserNavbar"; // Import UserNavbar
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // Routes for different navbars
  const recruiterPages = ["/recruiter", "/profile", "/employerUpdate", "/jobpost", "/manageJob", "/change-password"];
  const employerPages = ["/employer-dashboard", "/employer-jobs"];
  const userPages = ["/user-panel", "/saved-jobs", "/applied-jobs", "/user-profile"]; // User specific pages

  const isEmployerNavbar = employerPages.some(path => location.pathname.startsWith(path));
  const isRecruiterNavbar = recruiterPages.some(path => location.pathname.startsWith(path));
  const isUserNavbar = userPages.some(path => location.pathname.startsWith(path)); // Check for UserNavbar

  return (
    <>
      {isEmployerNavbar ? (
        <EmployerNavbar />
      ) : isRecruiterNavbar ? (
        <RecruiterNavbar />
      ) : isUserNavbar ? (
        <UserNavbar />
      ) : (
        <Navbar />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
