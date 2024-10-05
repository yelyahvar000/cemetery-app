import { appConfig } from '../config'
import {
  STO_TOKEN,
  STO_PERMISSION,
  STO_ROLE,
  CLIENT,
  STO_USER,
  ADMIN,
} from "../constants";

export const getUser = () => {
    return localStorage.getItem(STO_USER);
}
export const setUser = () => {
  return localStorage.getItem(STO_USER);
};

export const setRole = (data) => {
  localStorage.setItem(STO_ROLE, data);
};

export const getRole = () => {
  return ADMIN; //localStorage.getItem(STO_ROLE);
};

export const setPermission = (data) => {
  localStorage.setItem(STO_PERMISSION, data);
};

export const getPermission = (data) => {
  localStorage.getItem(STO_PERMISSION);
};

export const getToken = () => {
  if (appConfig.enableAuthToken) {
    return localStorage.getItem(STO_TOKEN);
  }
  return appConfig.fakeToken
};

export const setToken = (data) => {
  localStorage.setItem(STO_TOKEN, data);
};

