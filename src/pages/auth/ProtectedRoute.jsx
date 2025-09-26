import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children, guest }) {
  if (!user && !guest) {
    return <Navigate to="/signup" replace />;
  }
  return children;
}

export default ProtectedRoute;
