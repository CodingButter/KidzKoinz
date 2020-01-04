import { setLocalStorage, getLocalStorage } from "../utils/localStorage";

const key = "kidzkoinz";

/**
 * Store the auth tokens in local storage
 * @param {object} data
 */
export const setAuth = data => {
  setLocalStorage(key, data);
};

/**
 * Get the auth tokens from the local storage
 * @param {string} key
 */
export const getAuth = key => {
  return getLocalStorage(key);
};
