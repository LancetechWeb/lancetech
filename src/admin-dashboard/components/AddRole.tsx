import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { COLORS } from '../../core/styles/COLORS'
import axiosInstance from '../../utils/auth/axiosInstance'

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
        )
    }

  return (
    <Box sx={{
        display:"flex", 
        flexDirection:"column", 
        gap:1, 
        alignItems:"center",
        justifyContent:"center", 
        borderRadius:"5px",
        width:"30%",
        minWidth:"250px",
        maxWidth:"380px",
        alignSelf:"center"
    }}>
            <TextField 
                id="outlined-basic" 
                label="Title" 
                variant="outlined" 
                onChange={(e)=>setTitle(e.target.value)}
                sx={{width:"100%"}}
            />
            <TextField
                label="Rank" 
                onChange={(e)=>setRank(e.target.value)}
                sx={{width:"100%"}}
            />
            <TextField
                label="Remote" 
                onChange={(e)=>setRemote(e.target.value)}
                sx={{width:"100%"}}
            />
            <TextField
                multiline
                rows={5}
                placeholder="role description"
                label="Description" 
                onChange={(e)=>setDescription(e.target.value)}
                sx={{width:"100%"}}
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