import { Box } from '@mui/material'
import DashboardSideMenu from './DashboardSideMenu'
import DashboardDisplayComponent from './DashboardDisplayComponent'

const AdminDashboard = () => {
  return (
    <Box
      sx={{
        display:"flex",
        width:"100vw", 
        height:"100vh",
      }}
    >
      <DashboardSideMenu/>
      <DashboardDisplayComponent/>
    </Box>
  )
}

export default AdminDashboard