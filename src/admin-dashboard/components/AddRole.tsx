import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { COLORS } from '../../core/styles/COLORS'
import axiosInstance from '../../utils/auth/axiosInstance'
import { LexicalEditorComponent } from '../../utils/lexical'
import {ToolbarIconsType, allToolbarIcons} from '../../utils/lexical'

const AddRole = () => {
    // local state
    const [title, setTitle] = useState<string>("")
    const [rank, setRank] = useState<string>("")
    const [remote, setRemote] = useState<string>("")
    const [description, setDescription] = useState<string>("")

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

  return (
    <Box sx={{
        display:"flex", 
        flexDirection:"column", 
        gap:1, 
        alignItems:"center",
        justifyContent:"center", 
        borderRadius:"5px",
        // width:"30%",
        minWidth:"250px",
        maxWidth:"500px",
        alignSelf:"center"
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
                onClick={handleAddRole}
            >
                Add Role
            </Button>
    </Box>
  )
}

export default AddRole