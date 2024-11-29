import { Box } from '@mui/material'
import EditComponent from '../../../core/components/EditComponent'
import RoleCard from '../../../roles/components/RoleCard'
import { Role } from '../../../roles/types/roles.types'
import SimpleDialog from '../../../core/components/SimpleDialog'
import { useState } from 'react'
import { setEditRole } from '../../reducers/dashboard.reducers'
import { useDispatch } from 'react-redux'

const AdminRoleCard = ({
    role,
    handleRoleClick,
}:{
    role:Role
    handleRoleClick:(id:string)=>void;
}) => {
    const dispatch = useDispatch()

    // local states
    const [openDeleteRoleModal, setOpenDeleteRoleModal] = useState<boolean>(false)

    const onEdit =()=>{
        dispatch(setEditRole(role))
    }

    const onDelete =()=>{
        setOpenDeleteRoleModal(true)
    }

    const handleOnAcceptToDelete = () =>{
        // logic to send delete post request
    }

  return (
    <Box sx={{position:"relative"}}>
        <Box sx={{position:"absolute", top:4, right:4, zIndex:100}}>
            <EditComponent onEdit={onEdit} onDelete={onDelete}/>
        </Box>
        <RoleCard role={role} onClick={handleRoleClick}/> 

        {/** delete modal */}
        <SimpleDialog 
            open={openDeleteRoleModal} 
            setOpen={setOpenDeleteRoleModal} 
            title={'Delete Role'} 
            content={`Are you sure you want to delete the ${role.title} role?`}
            onAccept={handleOnAcceptToDelete}
        />
    </Box> 
  )
}

export default AdminRoleCard