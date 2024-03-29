import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, DashboardLayout, WrapperLayout } from "../layouts";

import { Home, Login, PreviewVideo, Register } from "../pages";
import { RecoverPassword } from "../pages/auth/RecoverPassword";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <WrapperLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
          {
            path: "/auth/recover",
            element: <RecoverPassword />,
          },
        ]
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Home />
          },
          {
            path: "/dashboard/preview/:id",
            element: <PreviewVideo />
          },
          {
            path: "/dashboard/videos",
            element: <div>Videos</div>,
          },
          {
            path: "/dashboard/profile",
            element: <div>Account</div>,
          },
        ]
      }
    ]
  },
]);
