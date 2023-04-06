import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/signin" />;
}

export function PublicRouteRollback({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/home"/> : children;
}