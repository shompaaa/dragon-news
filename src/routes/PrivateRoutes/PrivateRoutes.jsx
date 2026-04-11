import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../../pages/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation()
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/auth/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoutes;
