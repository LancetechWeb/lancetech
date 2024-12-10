import { Outlet, useNavigate,  } from 'react-router-dom'
import useAuthCheck from '../../core/hooks/useAuthCheck'
import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../core/selectors/core.selectors'
import AdminLogin from './AdminLogin'

const AdminAuthWrapper = () => {
  const navigate = useNavigate();

   // selectors
   const isAuthenticated = useSelector(selectIsAuthenticated)

 
   useLayoutEffect(()=>{
    console.log("...navigate to login in AdminAuthWrapper", isAuthenticated)
    
     isAuthenticated === false &&  navigate('/admin/login') // Redirect to admin Login page
   }, [isAuthenticated, navigate])

   //hooks
  useAuthCheck()

  return(
    <>
      {isAuthenticated && <Outlet/>}
      {isAuthenticated === false && <AdminLogin/>}
    </>
  )  
}

export default AdminAuthWrapper