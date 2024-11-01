import { Box, Divider } from '@mui/material'
import DashboardSideMenu from './DashboardSideMenu'
import { Outlet } from 'react-router-dom'
import DashBoardHeader from './DashBoardHeader'

const AdminDashboard = () => {


// RE-ROUTE TO THE PREVIOUS LINK FROM THE REDUX STORE



  return (
    <Box
      sx={{
        display:"flex",
        width:"100vw", 
        height:"100vh",
      }}
    >
      <DashboardSideMenu/>

      <Box sx={{width:"100%"}}>
        <DashBoardHeader/>
        <Divider/>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default AdminDashboard