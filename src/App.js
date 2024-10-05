import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ADMIN, TRESURER } from "./constants";
import { getToken, getUser, isNotEmpty, getPermission, getRole } from "./utility";

import { LoginPage } from "./cemetery/login";
import { RegistrationPage } from "./cemetery/registration";
import { Finder } from "./cemetery/finder";
import { MapView } from "./cemetery/map-view";
import { MapSetting } from "./cemetery/admin/map-setting";
import { AdminPanel } from "./cemetery/admin/admin-panel";
import { ErrorPage } from "./cemetery/error-page";

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
    path: "/cemetery/finder",
    element: <Finder />,
  },
  {
    path: "/cemetery/map-view",
    element: <MapView />,
  }
];

const adminRouter = [
  {
    path: "/cemetery/admin/admin-panel",
    element: <AdminPanel />
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
