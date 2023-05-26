import { Navigate } from "react-router-dom";
import { useAuth } from "./context"
import React from "react";

export const ProtectedRoute = ({ children }) => {
    const { role } = useAuth();
    if(!role) {
        return <Navigate to="/login" />
    }
    return children
}; 
