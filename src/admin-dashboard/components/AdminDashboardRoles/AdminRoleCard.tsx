import { Box } from '@mui/material'
import EditComponent from '../../../core/components/EditComponent'
import RoleCard from '../../../roles/components/RoleCard'
import { Role } from '../../../roles/types/roles.types'
import SimpleDialog from '../../../core/components/SimpleDialog'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setRoleToEdit } from '../../../roles/reducers/roles.reducers'
import { axiosWrapper } from '../../../utils/auth/axiosInstance'
import { setSnackbar } from '../../../core/reducers/coreSlice'

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
        dispatch(setRoleToEdit(role))
    }

    const onDelete =()=>{
        setOpenDeleteRoleModal(true)
    }

    const handleOnAcceptToDelete = async () =>{
        // logic to send delete post request
        const {data, error} = await axiosWrapper({method:'POST', url:'/authenticate/sign-out', data:{}});

        if(data){
          setOpenDeleteRoleModal(false)
          dispatch(setSnackbar({type:"success", message:"role deleted successfully!"}))   
        } 

        if(error) dispatch(setSnackbar({type:"error", message:`error logging out ${error.message}`})) 
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