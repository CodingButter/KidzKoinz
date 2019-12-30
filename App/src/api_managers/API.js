import axios from "axios";
const base_url = "http://10.0.0.218:80/KidzKoinz/server/";

/**
 * Uses axios to send a request ot the server api.
 * @param {String} request_type The type of request sent to the server
 * @param {object} data The data to be sent to the server
 * @returns {object}
 */
export const simpleRequest = (request_type, data) => {
  data.request_type = request_type;
  return axios.get(base_url, { params: data }).then(response => {
    return response.data;
  });
};
