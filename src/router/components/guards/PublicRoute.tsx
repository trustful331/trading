import type { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "src/store";

const PublicRoute = ({
  children,
  guestOnly = false,
}: {
  children: ReactElement;
  guestOnly?: boolean;
}) => {
  const token = useSelector((state: RootState) => state.auth.token);
  if (guestOnly && token) return <Navigate to="/dashboard" replace />;
  return children;
};

export default PublicRoute;
