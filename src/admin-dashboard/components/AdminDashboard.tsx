import { Box, Divider } from '@mui/material'
import DashboardSideMenu from './DashboardSideMenu'
import { Outlet } from 'react-router-dom'
import DashBoardHeader from './DashBoardHeader'
import { useSelector } from 'react-redux'
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors'

const AdminDashboard = () => {

  // selectors
  const menuIsOpen = useSelector(selectOpenDashboardMenu)

  return (
    <Box
      sx={{
        display:"flex",
        width:"100vw", 
        height:"100vh",
      }}
    >
      <DashboardSideMenu/>

      <Box sx={{ 
        width:`${menuIsOpen ? "calc(100% - 250px)" : "calc(100% - 84px)"}`,
        transition: 'width 0.3s ease-in-out', // Animation on width change
      }}>
        <DashBoardHeader/>
        <Divider/>
        <Box>
          <Outlet/>
        </Box>
      </Box>
    </Box>
  )
}

export default AdminDashboard