import { Box } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'
import { useSelector } from 'react-redux';
import { selectOpenDashboardMenu } from '../selectors/dashboard.selectors';
import DashboardMenuButton from './DashboardMenuButton';
import { DashboardMenu, DashboardMenus } from '../types/dashboard.types';
import Logo from '../../core/components/Logo';

const DashboardSideMenu = () => {

    // selectors
    const menuIsOpen = useSelector(selectOpenDashboardMenu)

    const excludedMenu = [DashboardMenu.SETTINGS]

  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        width:`${menuIsOpen ? "250px" : "80px"}`,
        borderRight:`1px solid ${COLORS.LightGrey}`,
        py:4,
        px:2,
        wordWrap:"break-word",
        transition: 'width 0.3s ease-in-out', // Animation on width change
        overflow:"hidden",
        boxSizing:"border-box"
    }}>
        <Box sx={{display:"flex", alignItems:"center", height:"34px", pl:1}}>
            <Logo noText={!menuIsOpen}/>
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