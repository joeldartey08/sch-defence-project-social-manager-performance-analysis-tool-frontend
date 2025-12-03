import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate } from "react-router-dom";
import { fetchUser } from "../services/auth";
import { Loader2 } from "lucide-react";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const token = localStorage.getItem("sch_token");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: fetchUser,
    enabled: true,
  });

  if (!token) {
    return <Navigate to={"/"} replace />;
  }

  if (isLoading) {
    return (
      <div className="fixed w-full z-50 backdrop-blur bg-black/70 flex justify-center items-center h-full left-0 bottom-0">
        <div className="w-96 h-48 bg-blue-100 rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
          <Loader2 className="animate-spin w-10 h-10 text-blue-700 mb-4" />
          <p className="text-blue-600 text-lg">Loading</p>
        </div>
      </div>
    );
  }

  if (isError) {
    localStorage.removeItem("sch_token");
    return <Navigate to="/" replace />;
  }

  if (data?.role !== "admin" && data.role !== "user") {
    return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
