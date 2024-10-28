import {  Icon, Button, Typography } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors';

const DashboardMenuButton = ({
    menu, 
    icon, 
    path, 
  }:{
    menu:string; 
    icon:string; 
    path:string; 
  }) => {

  const navigate = useNavigate()

    // selectors
    const menuIsOpen = useSelector(selectOpenDashboardMenu)
    
  return (
    <Button 
      sx={{
        justifyContent:"left", 
        gap:2, 
        p:2,
        color:`${COLORS.LightFont}`,
        alignItems:"center"
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