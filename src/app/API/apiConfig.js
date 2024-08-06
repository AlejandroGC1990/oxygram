import { keys } from "./apiKeys";

const apiUrl = keys.REACT_APP_API_URL;
const clientId = `client_id=${keys.REACT_APP_ACCESS_KEY}`;

export const getRandomPhotosEndpoint = `${apiUrl}photos/random?${clientId }`;

export const getSearchPhotos = (query) => {
  return `${apiUrl}search/photos/?query=${query}&${clientId}`;
};
