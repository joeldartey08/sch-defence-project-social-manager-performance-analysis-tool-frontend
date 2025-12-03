import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../store/useStore";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const token = localStorage.getItem("sch_token");
  const { isAuthenticated } = useStore();

  if (!isAuthenticated && !token) {
    return <Navigate to={"/"} replace />;
  }

  //   if (user?.role !== "admin" && user?.role !== "user") {
  //     return <Navigate to={"/"} replace />;
  //   }

  return <>{children}</>;
};

export default ProtectedRoute;
