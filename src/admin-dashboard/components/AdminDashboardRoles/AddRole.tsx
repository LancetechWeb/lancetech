import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { COLORS } from '../../../core/styles/COLORS'
import { axiosWrapper } from '../../../utils/auth/axiosInstance'
import { LexicalEditorComponent } from '../../../utils/lexical'
import { allToolbarIcons} from '../../../utils/lexical'
import { useDispatch, useSelector } from 'react-redux'
import { Role } from '../../../roles/types/roles.types'
import { addToCurrentState, clearEditedState, setEditedState, setRoleToEdit } from '../../../roles/reducers/roles.reducers'
import { selectEditedState, selectRoleToEdit } from '../../../roles/selectors/roles.selectors'
import { setSnackbar } from '../../../core/reducers/coreSlice'

const AddRole = ({
    role    
}:{
    role?:Role
}) => {
    const dispatch = useDispatch()

    // local state
    const [title, setTitle] = useState<string>(role?.title ?? "")
    const [rank, setRank] = useState<string>(role?.rank ?? "")
    const [remote, setRemote] = useState<string>(role?.remote ?? "")
    const [description, setDescription] = useState<string>(role?.description ?? "")

    // selectors
    const roleToEdit = useSelector(selectRoleToEdit)
    const editedState = useSelector(selectEditedState)

    const handleAddRole = async () => {
        const {error, data} = 
            await axiosWrapper({method:'POST', url:'/roles/create-role', data:{title, rank, remote, description}})
            
            if(data) {
                setTitle("")
                setRank("")
                setRemote("")
                setDescription("")
                dispatch(setSnackbar({type:"success", message:"Role added successfully!"}))    
            }

            if(error) dispatch(setSnackbar({type:"error", message:`oops! there was an error: ${error.message}`})) 
    }

    const handleCancelRoleEdit = ()=>{
        dispatch(setRoleToEdit(undefined))
    }

    const handleRoleUpdate = async() =>{        
        if(role){
            const {error, data} = 
                await axiosWrapper({method:'POST', url:`/roles/update/${role._id}`, data:editedState[role._id]})
            
            if(data) {
                dispatch(setRoleToEdit(undefined))
                dispatch(clearEditedState())
                dispatch(addToCurrentState({[data?._id]:data}))
                dispatch(setSnackbar({type:"success", message:"Role updated successfully!"}))    
            }

            if(error) dispatch(setSnackbar({type:"error", message:`oops! there was an error: ${error.message}`}))        
        }
    }

  return (
    <Box sx={{
        display:"flex", 
        flexDirection:"column", 
        gap:1, 
        alignItems:"center",
        justifyContent:"center", 
        borderRadius:"5px",
        minWidth:"250px",
        maxWidth:"500px",
        alignSelf:"center",
        maxHeight:"75%"
    }}>
            <TextField 
                value={title}
                id="outlined-basic" 
                label="Title" 
                variant="outlined" 
                onChange={(e)=>{
                    dispatch(setEditedState({
                        id:role?._id ?? "", 
                        field:{title:e.target.value}
                    }))
                    setTitle(e.target.value)
                }}
                sx={{width:"100%"}}
            />
            <TextField
                value={rank}
                label="Rank" 
                onChange={(e)=>{
                    dispatch(setEditedState({
                        id:role?._id ?? "", 
                        field:{rank:e.target.value}
                    }))
                    setRank(e.target.value)}
                }
                sx={{width:"100%"}}
            />
            <TextField
                value={remote}
                label="Remote" 
                onChange={(e)=>{
                    dispatch(setEditedState({
                        id:role?._id ?? "", 
                        field:{remote:e.target.value}
                    }))
                    setRemote(e.target.value)
                }}
                sx={{width:"100%"}}
            />
            <LexicalEditorComponent 
                value={description}
                toolbarButtons={allToolbarIcons} 
                onChange={(editorState:string)=>{
                    dispatch(setEditedState({
                        id:role?._id ?? "", 
                        field:{description:editorState}
                    }))
                    setDescription(editorState) 
                }}
            />
            <Button 
                variant='contained' 
                sx={{
                    width:"100%", 
                    mt:1, 
                    py:2, 
                    background:COLORS.MainBlue
                }}
                onClick={roleToEdit ? handleRoleUpdate : handleAddRole}
            >
               {roleToEdit ? "Update Role" : "Add Role"}
            </Button>
            {roleToEdit && <Button 
                variant='outlined' 
                sx={{
                    width:"100%", 
                    mt:1, 
                    py:2, 
                    border:`1px solid ${COLORS.MainBlue}`
                }}
                onClick={handleCancelRoleEdit}
            >
               Cancel
            </Button>}
    </Box>
  )
}

export default AddRole