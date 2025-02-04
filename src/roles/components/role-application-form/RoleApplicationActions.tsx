import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { COLORS } from '../../../core/styles/COLORS'
import { useNavigate } from 'react-router-dom';
import { Role, RoleApplicationFormFields } from '../../types/roles.types';
import { FieldErrors } from 'react-hook-form';

const RoleApplicationActions = ({role, loading, errors}:{role:Role; loading:boolean; errors:FieldErrors<RoleApplicationFormFields>}) => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery("(max-width:800px)");

    const handleCancelForm = () => navigate(`${role.id}`);

    const hasErrors = Object.keys(errors).length > 0;
    const firstError = Object.values(errors)[0]?.message;

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
            <Button onClick={handleCancelForm} disabled={loading} variant="outlined" type='submit' sx={{ py:2, my:"auto", color:COLORS.MainBlue, borderColor:COLORS.MainBlue }}>
                cancel
            </Button>
            <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
                <Button 
                    loading={loading} 
                    variant="contained" 
                    type='submit' 
                    sx={{ 
                            py:2, 
                            px:6, 
                            my:"auto", 
                            background: hasErrors ? "none" : COLORS.MainBlue, 
                            color: hasErrors ? 'red' : 'white',
                            border: firstError ? `1px solid red` : "none", 
                            boxShadow:"none"
                        }}   
                >
                    Apply
                </Button>

                {/* Optional error message below the button */}
                {firstError && (
                    <Typography color="error" variant="caption">
                        {firstError}
                    </Typography>
                )}
            </Box>
        </Box>
    </Box>
  )
}

export default RoleApplicationActions