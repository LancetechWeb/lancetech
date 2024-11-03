import {  Icon, Button, Typography } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors';
import { DashboardMenu } from '../types/dashboard.types';
import { isLocation } from '../../core/helpers/core.helpers';

const DashboardMenuButton = ({
    menu, 
    icon, 
    path, 
  }:{
    menu:DashboardMenu; 
    icon:string; 
    path:string; 
  }) => {

  const navigate = useNavigate()
  const location = useLocation()

  const isSelectedMenu =   isLocation(menu, location.pathname)

  // selectors
  const menuIsOpen = useSelector(selectOpenDashboardMenu)
    
  return (
    <Button 
      sx={{
        justifyContent:menuIsOpen ? "left" : "center", 
        gap:2,
        p:1,
        minWidth:"50px",
        color: isSelectedMenu ? "white" : `${COLORS.LightFont}`,
        alignItems:"center",
        // border: `1px solid ${isSelectedMenu ? COLORS.LightBackground : "none"}`,
        background: isSelectedMenu ? COLORS.LightButton : "none",
        borderRadius:  "5px"
      }}
      onClick={()=> navigate(path)}
    >
      <Icon sx={{fontSize:"30px"}}>
        {icon}
      </Icon>
      {menuIsOpen && <Typography sx={{fontSize:"16px", textTransform:"none"}}>{menu}</Typography>}
    </Button>
  )
}

export default DashboardMenuButton