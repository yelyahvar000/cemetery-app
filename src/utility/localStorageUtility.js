import { appConfig } from '../config'
import { TOKEN, USER } from "../constants";

export const getUser = () => {
    return localStorage.getItem(USER);
}

export const setUser = (data) => {
    localStorage.setItem(USER, data);
};

export const getToken = () => {
  if (appConfig.enableAuthToken) {
    return localStorage.getItem(TOKEN);
  }
  return appConfig.fakeToken
};

export const setToken = (data) => {
  localStorage.setItem(TOKEN, data);
};

