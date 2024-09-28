import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import landingPageSlice from "../feature/landing-page/landingPageSlice";
import loginSlice from "../feature/login-page/loginPageSlice";
import registrationPageSlice from "../feature/registration-page/registrationPageSlice";
import mapPageSlice from "../feature/map-route-page/mapPageSlice";

import { loginApi } from "../service/loginService";
import { registrationApi } from "../service/registrationService";
import { searchFinderApi } from "../service/searchFinderService";
;
export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: registrationApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [searchFinderApi.reducerPath]: searchFinderApi.reducer,

    mapPageSlice: mapPageSlice,
    landingPage: landingPageSlice,
    loginPage: loginSlice,
    registrationPage: registrationPageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      registrationApi.middleware,
      searchFinderApi.middleware
    ),
});

setupListeners(store.dispatch);