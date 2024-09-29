import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ADMIN, TRESURER } from "./constants";
import { getToken, getUser, isNotEmpty } from "./utility";

import { LoginPage } from "./feature/login-page";
import { RegistrationPage } from "./feature/registration-page";
import { LandingPage } from "./feature/landing-page";
import { MapPage } from "./feature/map-route-page";
import { MapRoutePage } from "./feature/admin/map-route-page";
import { PanelPage } from "./feature/admin/panel-page";
import { ErrorPage } from "./feature/error-page";

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/feature/registration",
    element: <RegistrationPage />,
  },
]);


const authenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/feature/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/feature/search",
    element: <LandingPage />,
  },
  {
    path: "/feature/map-route-page",
    element: <MapPage />,
  },
  {
    path: "/feature/admin/map-route-page",
    element: <MapRoutePage />,
  },
  {
    path: "/feature/admin/map-route-page",
    element: <MapRoutePage />,
  },
  {
    path: "/feature/admin/panel-page",
    element: <PanelPage />,
  },
]);

function App() {
  return <RouterProvider router={isNotEmpty(getToken()) ? authenticatedRouter:  authRouter} />;
}

export default App;
