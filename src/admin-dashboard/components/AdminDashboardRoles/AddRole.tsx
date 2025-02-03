import { Box, TextField, Button, useMediaQuery, Autocomplete, Chip } from '@mui/material'
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
    const dispatch = useDispatch();
    const isMobile = useMediaQuery("(max-width:800px)");
    

    // local state
    const [title, setTitle] = useState<string>(role?.title ?? "")
    const [rank, setRank] = useState<string>(role?.rank ?? "")
    const [remote, setRemote] = useState<string>(role?.remote ?? "")
    const [recipients, setRecipients] = useState<string[]>([])
    const [description, setDescription] = useState<string>(role?.description ?? "")

    // selectors
    const roleToEdit = useSelector(selectRoleToEdit)
    const editedState = useSelector(selectEditedState)

    const handleAddRole = async () => {
        const {error, data} = 
            await axiosWrapper({method:'POST', url:'/roles/create-role', data:{title, rank, remote, description, recipients}})
            
            if(data) {
                setTitle("")
                setRank("")
                setRemote("")
                setDescription("")
                setRecipients([])
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
        gap:4, 
        alignItems:"center",
        justifyContent:"center", 
        borderRadius:"5px",
        minWidth:"250px",
        px:4,
        alignSelf:"center",
        maxHeight:"75%",
        maxWidth:"1000px",
        width:"80%"
    }}>
        <Box sx={{display:"flex", flexDirection:isMobile?"column":"row", gap:2, width:"100%" }}>
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
        </Box>
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
                {!role &&
                    <Autocomplete
                    multiple
                    freeSolo
                    options={[]} // No predefined options since users can enter anything
                    value={recipients}
                    onChange={(event, newValue) => setRecipients(newValue)}
                    filterSelectedOptions
                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Recipient Emails"
                            placeholder="Type and press Enter"
                        />
                    )}
                    sx={{width:"100%"}}
                />
            }
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