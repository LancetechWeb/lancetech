// axiosInstance.js
import axios from 'axios';
import { store } from '../../store';
import { setIsAuthenticated } from '../../core/reducers/coreSlice';
import { getVariable } from '../misc/env.misc';

const axiosInstance = axios.create({
  baseURL: getVariable("BASE_URL"),
  withCredentials: true, // If you're dealing with cookies or sessions
  headers: {
      'Cache-Control': 'no-cache',            
  } 
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
  (error) => {
    console.error(error.message)

     // Prevent propagation of the error
     return; // Simply return to handle the error within the interceptor
  }
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

    console.error(error.message)
    
    // Prevent propagation of the error
    return; // Simply return to handle the error within the interceptor
  }
);

export default axiosInstance;
