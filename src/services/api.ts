import axios from 'axios';

require('dotenv').config();

const { REACT_APP_GH_TOKEN, REACT_APP_GH_API_BASE_URL } = process.env;

const config = {
  baseURL: REACT_APP_GH_API_BASE_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json', // explicitly request v3 response
    Authorization: `token ${REACT_APP_GH_TOKEN}`,
  },
};

const RestClient = axios.create(config);

/**
 * @description Handle GET requests
 * @param {string} path
 */
const get = async (path: string) => {
  try {
    return await RestClient.get(path);
  } catch (error) {
    return error;
  }
};

const searchUsers: (query: string) => Promise<any> = (query: string) =>
  get(`/search/users?q=${query}`);

export default { get, searchUsers };
