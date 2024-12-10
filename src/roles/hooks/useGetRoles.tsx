import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../../utils/auth/axiosInstance';
import { setCurrentState,  } from '../../roles/reducers/roles.reducers';
import { Role } from '../../roles/types/roles.types';
import { buildRolesSearchQueryParams } from '../helpers/roles.helpers';

const useGetRoles = (searchString?: string, page?: number, pageSize?: number, ) => {
    const dispatch = useDispatch()

    useEffect(() => {
      const roleQueryParams = buildRolesSearchQueryParams(searchString, page, pageSize, );

      const getRoles = async () => {
        try {
          const response = await axiosInstance.get(`/roles/get-roles?${roleQueryParams}`, ); 
          const data:Role[] = response.data.results;    
         
          const dataDictionary =  data.reduce((accumulator:Record<string, Role>, currentValue )=>{
              accumulator[currentValue._id] = currentValue
              
              return accumulator;
          }, {})

          dispatch(setCurrentState(dataDictionary ))

          console.log("...fetching roles")
          
        } catch (error) {
          // Handle error
          console.error(error)
        }
      };
  
      getRoles();
    }, [dispatch, page, pageSize, searchString]);
}

export default useGetRoles