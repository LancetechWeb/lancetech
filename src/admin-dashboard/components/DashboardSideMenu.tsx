import { Box, Icon, IconButton } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'
import { useDispatch, useSelector } from 'react-redux';
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors';
import { setOpenDashboardMenu } from '../reducers/dashboard.reducers';
import DashboardMenuButton from './DashboardMenuButton';
import { DashboardMenus } from '../types/dashboard.types';


const DashboardSideMenu = () => {
    const dispatch = useDispatch()

    // selectors
    const menuIsOpen = useSelector(selectOpenDashboardMenu)

    const handleDashboardMenu =()=>{
        dispatch(setOpenDashboardMenu())
    }


  return (
    <Box sx={{
        width:`${menuIsOpen ? "20%" : "50px"}`,
        maxWidth:"400px",
        minWidth:`${menuIsOpen ? "200px" : ""}`,
        borderRight:`1px solid ${COLORS.LightGrey}`,
        p:2,
        wordWrap:"break-word"
    }}>
        <IconButton onClick = {handleDashboardMenu}>
            <Icon>menu_Icon</Icon>
        </IconButton>

        {DashboardMenus.map
            (menu =><DashboardMenuButton/> )
        }
    </Box>
  )
}

export default DashboardSideMenu