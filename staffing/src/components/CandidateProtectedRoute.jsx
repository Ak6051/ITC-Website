import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CandidateProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType"); // UserType get karo

  // Agar token nahi hai ya userType allowed nahi hai toh login pe bhejo
  if (!token || !allowedRoles.includes(userType)) {
    return <Navigate to="/candidate-login" replace />;
  }

  return <Outlet />;
};

export default CandidateProtectedRoute;