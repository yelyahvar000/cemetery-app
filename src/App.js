import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ADMIN, TRESURER } from "./constants";
import { getToken, getUser, isNotEmpty, getPermission, getRole } from "./utility";

import { LoginPage } from "./cemetery/login";
import { RegistrationPage } from "./cemetery/registration";
import { Finder } from "./cemetery/finder";
import { About } from "./cemetery/about";
import { ContactUs } from "./cemetery/contact-us";
import { MapView } from "./cemetery/map-view";
import { AdminPanel } from "./cemetery/admin/admin";
import { ErrorPage } from "./cemetery/error-page";
import { Logs } from "./cemetery/admin/logs";
import { Profiling } from "./cemetery/admin/profiling";
import { Reports } from "./cemetery/admin/reports";
import { Notification } from "./cemetery/admin/notification";
import { UserManagement } from "./cemetery/admin/user-management";
import { Dashboard } from "./cemetery/admin/dashboard";
import { Mapping } from "./cemetery/admin/mapping";
import { MapSetting } from "./cemetery/admin/map-setting";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const authRouter = [
  {
    path: "/cemetery/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cemetery/registration",
    element: <RegistrationPage />,
  },
];

const authenticatedRouter = [
  {
    path: "/cemetery/about",
    element: <About />,
  },
  {
    path: "/cemetery/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/cemetery/finder",
    element: <Finder />,
  },
  {
    path: "/cemetery/map-view",
    element: <MapView />,
  },
];

const adminRouter = [
  {
    path: "/cemetery/admin",
    element: <AdminPanel />,
    children: [
      {
        path: "mapping",
        element: <Mapping />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "profiling",
        element: <Profiling />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      }
    ],
  },
  {
    path: "/cemetery/admin/map-setting",
    element: <MapSetting />,
  },
];

const getRouter = () => {
  if (!getToken()) {
    return authRouter;
  } else if ([ADMIN, TRESURER].includes(getRole())) {
    return [...authenticatedRouter, ...adminRouter];
  } else {
    return authenticatedRouter;
  }
}

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(getRouter())}
    />
  );
}

export default App;
