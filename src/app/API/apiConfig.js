import { keys } from "./apiKeys";


const apiUrl = keys.REACT_APP_API_URL;
const accessKey = keys.REACT_APP_ACCESS_KEY;


export const getRandomPhotosEndpoint = `${apiUrl}photos/?${accessKey}`;

export const getSearchPhotos = `${apiUrl}search/?${accessKey}`;
