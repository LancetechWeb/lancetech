import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setUser } from '../reducers/coreSlice';
import axiosInstance from '../../utils/auth/axiosInstance';

const useAuthCheck = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.post(
          '/authenticate/check-auth', 
          {},
        ); // Endpoint to check authentication status

        console.log("...running useAuthCheck", response.status)

        if (response.status === 200) {
          // User is authenticated
          dispatch(setIsAuthenticated(true))
          dispatch(setUser(response.data))
        } else {
          // User is not authenticated
          dispatch(setIsAuthenticated(false))
          dispatch(setUser(undefined))
        }

      } catch (error) {
        // Handle error or assume user is not authenticated
        dispatch(setIsAuthenticated(false))
        dispatch(setUser(undefined))
      }
    };

    checkAuth();

   
  }, [dispatch]);
};

export default useAuthCheck;
