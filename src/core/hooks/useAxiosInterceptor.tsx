import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAxiosInterceptor = () => {
  const navigate = useNavigate();

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) 
        navigate('admin/login');
      
      return Promise.reject(error);
    }
  );
};

export default useAxiosInterceptor;