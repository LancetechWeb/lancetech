import { Box } from '@mui/material'
import AddRole from './AddRole'
import { useSelector } from 'react-redux'
import { selectRoles, selectRoleToEdit } from '../../../roles/selectors/roles.selectors'
import { COLORS } from '../../../core/styles/COLORS'
import { useState } from 'react'
import RoleDetailsDialog from './RoleDetailsDialog'
import AdminRoleCard from './AdminRoleCard'
import useGetRoles from '../../../roles/hooks/useGetRoles'

const DashboardRolesComponent = () => {

  // local state
  const[openDialog, setOpenDialog] = useState<boolean>(false)
  const[roleId, setRoleId] = useState<string>("")

  // selectors
  const roles = useSelector(selectRoles)
  const roleToEdit = useSelector(selectRoleToEdit)

  // hooks
  useGetRoles()    

  // handles role click
  const handleRoleClick = (id:string) =>{
    setRoleId(id)

    setOpenDialog(true)
  }

  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", pt:2, gap:2, height:"85%",}}>
        {!roleToEdit && <AddRole/>}
        {roleToEdit && <AddRole role={roleToEdit}/>}
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