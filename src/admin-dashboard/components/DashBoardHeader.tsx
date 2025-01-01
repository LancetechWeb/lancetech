import { Box, Button, Icon, IconButton, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenDashboardMenu } from '../reducers/dashboard.reducers'
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors'
import { setIsAuthenticated, setSnackbar, setUser } from '../../core/reducers/coreSlice'
import { axiosWrapper } from '../../utils/auth/axiosInstance'
import { selectUser } from '../../core/selectors/core.selectors'
import { getUserInitials } from '../../navbar/helpers/navbar.helpers'
import { COLORS } from '../../core/styles/COLORS'

const DashBoardHeader = () => {
  const dispatch = useDispatch()

  // selectors
  const menuIsOpen = useSelector(selectOpenDashboardMenu)
  const user = useSelector(selectUser)

  const handleDashboardMenu =()=>{
    dispatch(setOpenDashboardMenu())
  }

   // logout
  const handleSignOut = async () => {
    const {data, error} = await axiosWrapper({method:'POST', url:'/authenticate/sign-out', data:{}});

    if(data){
      dispatch(setIsAuthenticated(false))
      dispatch(setUser(undefined))
      dispatch(setSnackbar({type:"success", message:"logged out successfully!"}))   
    } 
    if(error) dispatch(setSnackbar({type:"error", message:`error logging out ${error.message}`})) 
  }

  return (
    <Box sx={{p:2, display:"flex", alignItems:"center", justifyContent:"space-between", height:"10%", boxSizing:"border-box"}}>
      <Box sx={{display:"flex", alignItems:"center",}}>
        <IconButton onClick = {handleDashboardMenu}>
          <Icon>menu_Icon</Icon>
        </IconButton>
        <Typography>{menuIsOpen ? "Hide Menu" : "Expand Menu"}</Typography>
      </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:2}}>
        {user && <Typography>{getUserInitials(user)}</Typography>}
        <Button 
          variant='outlined' 
          onClick={handleSignOut} 
          sx={{border:`1px solid ${COLORS.MainBlue}`}}
        >
          <Typography sx={{
            textTransform:"none",
            color:COLORS.MainBlue
          }}>Logout</Typography>
          
        </Button>
      </Box>
    </Box>
  )
}

export default DashBoardHeader