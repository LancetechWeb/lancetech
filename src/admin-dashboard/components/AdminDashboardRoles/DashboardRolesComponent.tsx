import { Box } from '@mui/material'
import AddRole from './AddRole'
import useGetRoles from '../../../core/hooks/useGetRoles'
import { useSelector } from 'react-redux'
import { selectRoles } from '../../../roles/selectors/roles.selectors'
import { COLORS } from '../../../core/styles/COLORS'
import { useState } from 'react'
import RoleDetailsDialog from './RoleDetailsDialog'
import AdminRoleCard from './AdminRoleCard'
import { selectEditRole } from '../../selectors/dashboard.selectors'

const DashboardRolesComponent = () => {

  // local state
  const[openDialog, setOpenDialog] = useState<boolean>(false)
  const[roleId, setRoleId] = useState<string>("")

  // selectors
  const roles = useSelector(selectRoles)
  const editRole = useSelector(selectEditRole)

  // hooks
  useGetRoles()    

  // handles role click
  const handleRoleClick = (id:string) =>{
    setRoleId(id)
    
    console.log("roleId", id)

    setOpenDialog(true)
  }

  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", pt:2, gap:2, height:"85%",}}>
        {!editRole && <AddRole/>}
        {editRole && <AddRole role={editRole}/>}
        <Box sx={{ 
            display:"flex", 
            overflowX:"auto", 
            p:2, 
            gap:2,
            borderTop:`1px solid ${COLORS.FadedWhite}`, 
            background:COLORS.LightBackground,
            maxHeight:"25%"
        }}>
            {roles.map(r=> 
              <AdminRoleCard role={r} handleRoleClick={handleRoleClick}/>               
            )}
        </Box>
        <RoleDetailsDialog open={openDialog} setOpen={setOpenDialog} roleId={roleId}/>
    </Box>
    
  )
}

export default DashboardRolesComponent