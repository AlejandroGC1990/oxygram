import { keys } from "./apiKeys";

const apiUrl = keys.VITE_API_URL;
const clientId = keys.VITE_ACCESS_KEY;

export const getRandomPhotosEndpoint = ({ page = 1, perPage = 10 }) =>
  `${apiUrl}/photos/random?client_id=${clientId}&page=${page}&count=${perPage}`;

export const getSearchPhotosEndpoint = (query, page = 1, perPage = 10) => {
  return `${apiUrl}/search/photos/?query=${query}&client_id=${clientId}&page=${page}&per_page=${perPage}`;
};

export const getlastestPhotosEndpoint = ({ page = 1, perPage = 10 } = {}) =>
  `${apiUrl}/photos/?client_id=${clientId}&page=${page}&per_page=${perPage}&order_by=latest`;