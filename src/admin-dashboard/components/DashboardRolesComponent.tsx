import { Box } from '@mui/material'
import AddRole from './AddRole'
import useGetRoles from '../../core/hooks/useGetRoles'
import { useSelector } from 'react-redux'
import { selectRoles } from '../../roles/selectors/roles.selectors'
import RoleCard from '../../roles/components/RoleCard'
import { COLORS } from '../../core/styles/COLORS'

const DashboardRolesComponent = () => {
    // selectors
    const roles = useSelector(selectRoles)

    // hooks
    useGetRoles()    

    // handles role click
    const handleRoleClick = (roleId:string) =>{
      
    }

  return (
    <Box sx={{display:"flex", flexDirection:"column", pt:2, gap:2}}>
        <AddRole/>
        <Box sx={{ 
            display:"flex", 
            overflowX:"auto", 
            p:2, 
            borderTop:`1px solid ${COLORS.FadedWhite}`, 
            background:COLORS.LightBackground
        }}>
            {roles.map(r=> <RoleCard role={r} onClick={handleRoleClick}/> )}
        </Box>
    </Box>
    
  )
}

export default DashboardRolesComponent