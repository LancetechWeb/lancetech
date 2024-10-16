import { Outlet, useNavigate } from 'react-router-dom'
import useAuthCheck from '../../core/hooks/useAuthCheck'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../core/selectors/core.selectors'

const AdminAuthWrapper = () => {
  const navigate = useNavigate();


   // selectors
   const isAuthenticated = useSelector(selectIsAuthenticated)

   console.log("auth check ran")
 
   useEffect(()=>{
     console.log('what is isAuthenticated...', isAuthenticated);
 
     !isAuthenticated &&  navigate('/admin/login') // Redirect to admin Login page
     isAuthenticated &&  navigate('/admin/dashboard') // Redirect to admin Dashboard
   }, [isAuthenticated, navigate])

   //hooks
  useAuthCheck()


  console.log("")

  return( <Outlet/>)  
}

export default AdminAuthWrapper