/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import '../Spinner/spinner.css'
import { AuthContext } from "../provider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="spinner-container">
        <span className="spinner"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location} to="/login" replace></Navigate>;
};

export default PrivateRoute;
