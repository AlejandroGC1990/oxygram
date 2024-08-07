import { keys } from "./apiKeys";

const apiUrl =  keys.VITE_API_URL;
const clientId = `client_id=${keys.VITE_ACCESS_KEY}`;

export const getRandomPhotosEndpoint = () => `${apiUrl}/photos/random/?${clientId}`;

export const getSearchPhotosEndpoint = (query) => {
  return `${apiUrl}search/photos/?query=${query}&${clientId}`;
};
