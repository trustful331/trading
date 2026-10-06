import { Navigate, useLocation } from "react-router-dom";

const renamed: Record<string, string> = {
  trade: "/platform",
  ib: "/partners",
};

export default function LegacyPortalRedirect() {
  const { pathname } = useLocation();
  const rest = pathname.replace(/^\/portal\/?/, "");
  const target = renamed[rest] ?? (rest ? `/${rest}` : "/dashboard");
  return <Navigate to={target} replace />;
}
