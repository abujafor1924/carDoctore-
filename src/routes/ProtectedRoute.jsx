import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);

  const location = useLocation();

  if (loding) {
    return <progress className="progress w-56"></progress>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to={"/login"} state={{ form: location }} replace></Navigate>;
};

export default ProtectedRoute;
