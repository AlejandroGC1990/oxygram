import { keys } from "./apiKeys";

const apiUrl =  keys.VITE_API_URL;
const clientId = keys.VITE_ACCESS_KEY;

export const getRandomPhotosEndpoint = () => `${apiUrl}/photos/random?client_id=${clientId}&count=1`;

export const getSearchPhotosEndpoint = (query) => {
  return `${apiUrl}search/photos/?query=${query}&${clientId}`;
};
