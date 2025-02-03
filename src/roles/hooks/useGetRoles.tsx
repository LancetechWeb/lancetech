import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import  { axiosWrapper } from '../../utils/auth/axiosInstance';
import { setCurrentState,  } from '../../roles/reducers/roles.reducers';
import { Role } from '../../roles/types/roles.types';
import { buildRolesSearchQueryParams } from '../helpers/roles.helpers';

const useGetRoles = (searchString?: string, page?: number, pageSize?: number, ) => {
    const dispatch = useDispatch()

    useEffect(() => {
      const roleQueryParams = buildRolesSearchQueryParams(searchString, page, pageSize, );

      const getRoles = async () => {
          const {data} = await axiosWrapper({url:`/roles/get-roles?${roleQueryParams}`});

          if(data){
            const roles:Role[] = data.results;  
                    
            const dataDictionary =  roles.reduce((accumulator:Record<string, Role>, currentValue )=>{
                accumulator[currentValue.id] = currentValue
                
                return accumulator;
            }, {})

            dispatch(setCurrentState(dataDictionary ))
          }
      };
  
      getRoles();
    }, [dispatch, page, pageSize, searchString]);
}

export default useGetRoles


