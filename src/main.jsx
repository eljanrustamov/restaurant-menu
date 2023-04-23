import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./admin/pages/Dashboard/Dashboard.component";
import Login from "./pages/Login/Login";
import { AuthProvider } from "react-auth-kit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}
  >
    <RouterProvider router={router} />
  </AuthProvider>
);
