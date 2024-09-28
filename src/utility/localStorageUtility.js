import { TOKEN, USER } from "../constants";

export const getUser = () => {
    return localStorage.getItem(USER);
}

export const setUser = (data) => {
    localStorage.setItem(USER, data);
};

export const getToken = () => {
  return "true" // localStorage.getItem(TOKEN);
};

export const setToken = (data) => {
  localStorage.setItem(TOKEN, data);
};

