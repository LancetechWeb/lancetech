import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { COLORS } from '../../../core/styles/COLORS'
import axiosInstance from '../../../utils/auth/axiosInstance'
import { LexicalEditorComponent } from '../../../utils/lexical'
import { allToolbarIcons} from '../../../utils/lexical'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditRole } from '../../selectors/dashboard.selectors'
import { setEditRole } from '../../reducers/dashboard.reducers'
import { Role } from '../../../roles/types/roles.types'

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
    const editRole = useSelector(selectEditRole)

    const handleAddRole = () => {
        axiosInstance.post(
            '/roles/create-role', 
            {title, rank, remote, description}
        ).then(resp =>{
            setTitle("")
            setRank("")
            setRemote("")
            setDescription("")
        } )
    }

    const handleCancelRoleEdit = ()=>{
        dispatch(setEditRole(undefined))
    }

    const handleRoleUpdate = () =>{
        
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
                onChange={(e)=>setTitle(e.target.value)}
                sx={{width:"100%"}}
            />
            <TextField
                value={rank}
                label="Rank" 
                onChange={(e)=>setRank(e.target.value)}
                sx={{width:"100%"}}
            />
            <TextField
                value={remote}
                label="Remote" 
                onChange={(e)=>setRemote(e.target.value)}
                sx={{width:"100%"}}
            />
            <LexicalEditorComponent 
                value={description}
                toolbarButtons={allToolbarIcons} 
                onChange={(editorState:string)=>setDescription(editorState) }
            />
            <Button 
                variant='contained' 
                sx={{
                    width:"100%", 
                    mt:1, 
                    py:2, 
                    background:COLORS.MainBlue
                }}
                onClick={editRole ? handleRoleUpdate : handleAddRole}
            >
               {editRole ? "Update Role" : "Add Role"}
            </Button>
            {editRole && <Button 
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