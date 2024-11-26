import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../../utils/auth/axiosInstance';
import { setRoles } from '../../roles/reducers/roles.reducers';

const useGetRoles = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await axiosInstance.get('/roles/get-roles'); 

          dispatch(setRoles(response.data))

          console.log("...fetching roles")
          
        } catch (error) {
          // Handle error
          console.error(error)
        }
      };
  
      checkAuth();
    }, [dispatch]);
}

export default useGetRoles