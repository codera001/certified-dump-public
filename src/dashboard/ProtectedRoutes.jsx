import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const refreshToken = sessionStorage.getItem("token");
  const googleToken = sessionStorage.getItem("google-token");
  let auth = { token: refreshToken, google: googleToken };
  return auth.token || auth.google ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
