import { Box } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'
import { useSelector } from 'react-redux';
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors';
import DashboardMenuButton from './DashboardMenuButton';
import { DashboardMenus } from '../types/dashboard.types';
import logo from '../../assets/lancetech.svg';
import logoNoText from '../../assets/lancetech-logo-no-text.svg';

const DashboardSideMenu = () => {

    // selectors
    const menuIsOpen = useSelector(selectOpenDashboardMenu)



  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        width:`${menuIsOpen ? "250px" : "50px"}`,
        borderRight:`1px solid ${COLORS.LightGrey}`,
        px:2,
        pr:4,
        py:4,
        wordWrap:"break-word",
        transition: 'width 0.3s ease-in-out', // Animation on width change
        overflow:"hidden"
    }}>
        <Box>
            <img src={menuIsOpen ? logo:logoNoText} alt="lancetechLOGO" style={{height:"34px", paddingLeft:"16px"}}/>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:2, flexGrow:0.8}}>
            {DashboardMenus.map
                (m =><DashboardMenuButton menu={m.menu} icon={m.icon} path={m.path}/> )
            }
        </Box>
        <DashboardMenuButton menu="Settings" icon="settings" path="settings" />
    </Box>
  )
}

export default DashboardSideMenu