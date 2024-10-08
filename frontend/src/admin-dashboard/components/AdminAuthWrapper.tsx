import useAuthCheck from '../../core/hooks/useAuthCheck'
import useAxiosInterceptor from '../../core/hooks/useAxiosInterceptor'
import AdminLogin from './AdminLogin'

const AdminAuthWrapper = () => {
  useAxiosInterceptor()
  useAuthCheck()

  console.log("")

  return(  <AdminLogin/>)
  
}

export default AdminAuthWrapper