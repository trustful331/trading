import type { ReactElement } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import PrivateRoute from "./components/guards/PrivateRoute";
import PublicRoute from "./components/guards/PublicRoute";
import { AllRoutes } from "./components/routes";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";

export type RouteConfig = {
  path?: string;
  index?: boolean;
  page: ReactElement;
  isPrivate?: boolean;
  public?: boolean;
  guestOnly?: boolean;
  children?: RouteConfig[];
};

function buildRoute(item: RouteConfig): RouteObject {
  const baseElement = item.isPrivate ? (
    <PrivateRoute>{item.page}</PrivateRoute>
  ) : (
    <PublicRoute guestOnly={!!item.guestOnly}>{item.page}</PublicRoute>
  );

  const children =
    item.children && item.children.length > 0
      ? item.children.map((child) => buildRoute(child))
      : undefined;

  if (item.index) {
    return { index: true, element: baseElement };
  }

  const route: RouteObject = { element: baseElement, children };
  if (item.path === "/") route.path = "";
  else if (item.path) route.path = item.path;
  return route;
}

const routeObjects: RouteObject[] = AllRoutes.map((item) => buildRoute(item));

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routeObjects,
  },
]);

export default router;
