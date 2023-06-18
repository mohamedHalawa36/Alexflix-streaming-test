import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

export const AuthGuards = (e) => {
  if (localStorage.getItem("token")) {
    const { isAdmin } = jwtDecode(localStorage.getItem("token"));
    if (isAdmin) return e.children;
    else return <Navigate to="/notFound" />;
  }
  return <Navigate to="/login" />;
};

export const UserGuard = (e) => {
  if (localStorage.getItem("token")) {
    const { isAdmin } = jwtDecode(localStorage.getItem("token"));
    if (!isAdmin) return e.children;
    else return <Navigate to="/notFound" />;
  }
  return <Navigate to="/login" />;
};
