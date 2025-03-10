// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const RecruiterProtectedRoute = () => {
//   const token = localStorage.getItem("token");
//   const userType = localStorage.getItem("userType");

//   // Agar token nahi hai ya userType recruiter nahi hai, toh login page pe bhejo
//   if (!token || userType !== "recruiter") {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default RecruiterProtectedRoute;
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RecruiterProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType"); // UserType get karo

  // Agar token nahi hai ya userType allowed nahi hai toh login pe bhejo
  if (!token || !allowedRoles.includes(userType)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RecruiterProtectedRoute;
