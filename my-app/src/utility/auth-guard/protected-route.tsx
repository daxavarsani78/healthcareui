import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./token-manager";
import { DeveloperAppRoutes } from "../app-routes";
type ComponentProps = {
  element: any;
};
export const ProtectedRoute = (props: ComponentProps) => {
  // Extract Props
  const { element } = props;
  const sessionToken = getToken();
  return sessionToken ? (
    element || <Outlet />
  ) : (
    <Navigate to={DeveloperAppRoutes.adminLogin} replace />
  );
};
