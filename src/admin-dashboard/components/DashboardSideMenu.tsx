import { Box } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'
import { useSelector } from 'react-redux';
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors';
import DashboardMenuButton from './DashboardMenuButton';
import { DashboardMenu, DashboardMenus } from '../types/dashboard.types';
import logo from '../../assets/lancetech.svg';
import logoNoText from '../../assets/lancetech-logo-no-text.svg';

const DashboardSideMenu = () => {

    // selectors
    const menuIsOpen = useSelector(selectOpenDashboardMenu)

    const excludedMenu = [DashboardMenu.SETTINGS]

  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        width:`${menuIsOpen ? "250px" : "60px"}`,
        borderRight:`1px solid ${COLORS.LightGrey}`,
        pl:2,
        pr: menuIsOpen ? 0 : 2,
        py:4,
        wordWrap:"break-word",
        transition: 'width 0.3s ease-in-out', // Animation on width change
        overflow:"hidden"
    }}>
        <Box>
            <img src={menuIsOpen ? logo:logoNoText} alt="lancetechLOGO" style={{height:"34px", paddingLeft:"16px"}}/>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:2, flexGrow:0.8}}>
            {DashboardMenus.filter(m => !excludedMenu.includes(m.menu)).map
                (m =><DashboardMenuButton menu={m.menu} icon={m.icon} path={m.path}/> )
            }
        </Box>
        <DashboardMenuButton menu={DashboardMenu.SETTINGS} icon="settings" path="settings" />
    </Box>
  )
}

export default DashboardSideMenu