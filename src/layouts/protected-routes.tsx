import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { LoaderPage } from "./loader-page";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return <LoaderPage />;
  }
  if(!isSignedIn) {
    return <Navigate to={"/sigin/"} replace />
  }
  return <div>ProtectedRoutes</div>;
};

export default ProtectedRoutes;
 