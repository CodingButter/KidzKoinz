/**
 * Save data in the local storage
 * @param {string} key
 * @param {object} data
 */
export const setLocalStorage = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Retrieve data from local storage
 * @param {string} key
 * @returns {object}
 */
export const getLocalStorage = key => {
  return JSON.parse(window.localStorage.getItem(key));
};
