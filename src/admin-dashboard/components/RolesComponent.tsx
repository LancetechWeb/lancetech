import { Box, Button, Divider, TextField } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'

const RolesComponent = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", height:"89%", py:2, gap:2, boxSizing:"border-box"}}>
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
                // onChange={handleEmail}
                sx={{width:"100%"}}
           />
            <TextField
                label="Rank" 
                sx={{width:"100%"}}
            />
            <TextField
                label="Remote" 
                sx={{width:"100%"}}
            />
            <TextField
                multiline
                rows={5}
                placeholder="role description"
                label="Description" 
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
            >
                Add Role
            </Button>
        </Box>
        <Divider/>
    </Box>
    
  )
}

export default RolesComponent