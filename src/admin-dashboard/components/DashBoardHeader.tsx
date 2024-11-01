import { Box, Icon, IconButton, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenDashboardMenu } from '../reducers/dashboard.reducers'
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors'

const DashBoardHeader = () => {
  const dispatch = useDispatch()

     // selectors
     const menuIsOpen = useSelector(selectOpenDashboardMenu)

  const handleDashboardMenu =()=>{
    dispatch(setOpenDashboardMenu())
}

  return (
    <Box sx={{py:2, display:"flex", alignItems:"center", height:"10%", boxSizing:"border-box"}}>
      <IconButton onClick = {handleDashboardMenu}>
        <Icon>menu_Icon</Icon>
      </IconButton>
      <Typography>{menuIsOpen ? "Hide Menu" : "Expand Menu"}</Typography>
    </Box>
  )
}

export default DashBoardHeader