import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || '/',
  withCredentials: true,
});

export default apiClient;
