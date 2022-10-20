import { Navigate, useLocation } from "react-router-dom";
import useToken from "../hooks/useToken";

const PrivateRoute = ({ children }) => {
  const [token] = useToken();
  const location = useLocation();

  if (!token) return <Navigate to="/auth" state={{ from: location }} replace />;
  else return children;
};

export default PrivateRoute;
