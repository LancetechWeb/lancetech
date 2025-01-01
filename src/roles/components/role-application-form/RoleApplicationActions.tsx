import { Box, Button, useMediaQuery } from '@mui/material'
import { COLORS } from '../../../core/styles/COLORS'
import { useNavigate } from 'react-router-dom';
import { Role } from '../../types/roles.types';

const RoleApplicationActions = ({role}:{role:Role}) => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery("(max-width:800px)");

    const handleCancelForm = () => navigate(`${role._id}`);

  return (
    <Box 
        sx={{
            py:2,
            ...(!isMobile && {
                position:"fixed", 
                bottom:0, 
                left:0, 
                right:0,
                background:'white',
                borderTop:"1px solid",
                zIndex:10
            }),               
        }}
    >
        <Box sx={{
            maxWidth:"1024px",
            mx:"auto",
            display:"flex",    
            justifyContent:"space-between",  
            gap:2, 
            ...(isMobile ? {
                flexDirection:"column-reverse",
                width:"100%"                                
            }:{
                px:2
            }),                                                         
        }}>
            <Button onClick={handleCancelForm} variant="outlined" type='submit' sx={{ py:2, my:"auto", color:COLORS.MainBlue, borderColor:COLORS.MainBlue }}>
                cancel
            </Button>
            <Button variant="contained" type='submit' sx={{ py:2, px:6, my:"auto", background:COLORS.MainBlue }}>
                Login
            </Button>
        </Box>
    </Box>
  )
}

export default RoleApplicationActions