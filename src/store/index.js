import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import finderSlice from "../cemetery/finder/slice";
import loginSlice from "../cemetery/login/slice";
import registrationSlice from "../cemetery/registration/slice";
import mapViewSlice from "../cemetery/map-view/slice";

import { loginApi } from "../service/loginService";
import { registrationApi } from "../service/registrationService";
import { searchFinderApi } from "../service/searchFinderService";
;
export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: registrationApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [searchFinderApi.reducerPath]: searchFinderApi.reducer,
    mapViewSlice,
    finderSlice,
    loginSlice,
    registrationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      registrationApi.middleware,
      searchFinderApi.middleware
    ),
});

setupListeners(store.dispatch);