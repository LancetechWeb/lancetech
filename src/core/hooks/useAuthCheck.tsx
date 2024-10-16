import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../reducers/coreSlice';

const useAuthCheck = () => {
  const dispatch = useDispatch()

 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post(
          'http://localhost:9000/authenticate/check-auth', 
          {},
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',            
            }
          },
        ); // Endpoint to check authentication status

        if (response.status === 200) {
          // User is authenticated
          dispatch(setIsAuthenticated(true))
        } else {
          // User is not authenticated
          dispatch(setIsAuthenticated(false))
        }
      } catch (error) {
        // Handle error or assume user is not authenticated
        dispatch(setIsAuthenticated(false))
      }
    };

    checkAuth();
  }, [dispatch]);
};

export default useAuthCheck;
