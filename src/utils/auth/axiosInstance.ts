// axiosInstance.js
import axios from 'axios';
import { store } from '../../store';
import { setIsAuthenticated } from '../../core/reducers/coreSlice';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000',
  withCredentials: true, // If you're dealing with cookies or sessions
  headers: {
      'Cache-Control': 'no-cache',            }
  
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config (e.g., add auth token)
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      console.log('Unauthorized! Redirecting to login...');
      store.dispatch(setIsAuthenticated(false))
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
