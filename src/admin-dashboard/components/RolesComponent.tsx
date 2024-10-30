import { Box, TextField } from '@mui/material'
import React from 'react'

const RolesComponent = () => {
  return (
    <Box sx={{
        display:"flex", 
        flexDirection:"column", 
        gap:2, 
        alignItems:"center"
    }}>
        <TextField/>
        <TextField/>
        <TextField/>
        <TextField
            // fullWidth
            multiline
            rows={5}
            placeholder="role description"
        />
    </Box>
  )
}

export default RolesComponent