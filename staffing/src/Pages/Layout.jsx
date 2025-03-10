// src/Pages/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import RecruiterNavbar from './RecruiterNavbar';
import EmployerNavbar from '../components/Employer panel/EmployerNavbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  // Routes for different navbars
  const recruiterPages = ['/recruiter', '/profile', '/employerUpdate' , '/jobpost'];
  const employerPages = ['/employer-dashboard','/employer-jobs'];

  const isEmployerNavbar = employerPages.some(path => location.pathname.startsWith(path));
  const isRecruiterNavbar = recruiterPages.some(path => location.pathname.startsWith(path));

  return (
    <>
      {isEmployerNavbar ? (
        <EmployerNavbar />
      ) : isRecruiterNavbar ? (
        <RecruiterNavbar />
      ) : (
        <Navbar />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
