// axiosInstance.js
import axios from 'axios';
import { store } from '../../store';
import { setIsAuthenticated, setUser } from '../../core/reducers/coreSlice';
import { getVariable } from '../misc/env.misc';
import router from '../../core/routes/routes';

const currentPath = window.location.pathname

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
      store.dispatch(setIsAuthenticated(false));
      store.dispatch(setUser(undefined));

      if(currentPath.includes("admin/dashboard"))
        router.navigate('/admin/login')
    }

    console.error(error.message)
    
    // Prevent propagation of the error
    return error; // Simply return to handle the error within the interceptor
  }
);

export default axiosInstance;
