import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated, setUser } from '../reducers/coreSlice';
import axiosInstance from '../../utils/auth/axiosInstance';
import { selectIsAuthenticated, selectUser } from '../selectors/core.selectors';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // selectors
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if(
    window.location.pathname.includes("admin/dashboard") &&
    (!user || !isAuthenticated)
  ) navigate('admin/login');


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.post(
          '/authenticate/check-auth', 
          {},
        ); // Endpoint to check authentication status

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

   
  }, [dispatch, navigate]);
};

export default useAuthCheck;
