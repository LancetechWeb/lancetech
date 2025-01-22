import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Button, DialogContent } from '@mui/material';
import { Role } from '../../types/roles.types';
import { useNavigate } from 'react-router-dom';
import SuccessIcon from '../../../core/components/SuccessIcon';
import { COLORS } from '../../../core/styles/COLORS';

const ConfirmationDialog = ({role, open}:{role:Role; open:boolean}) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`${role.id}`)
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <DialogTitle>Application sent succcessfully!</DialogTitle> */}
      <DialogContent sx={{display:"flex", flexDirection:"column", justifyContent:"center", gap:5, py:10, px:5}}>
        <SuccessIcon message='Your application has been received!'/>
        <Box sx={{textAlign:"center"}}>          
          {/* <Typography variant='h6' sx={{fontWeight:800}}>Your application has been received!</Typography> */}
          <Typography sx={{color:COLORS.LightFont}}>We are currently reviewing it and will get back to you soon.</Typography>
          <Typography sx={{color:COLORS.LightFont}}>In the meantime, feel free to explore and apply for other opportunities at Lancetech.</Typography>
        </Box>
        <Button variant="contained" onClick={handleClose} sx={{ py:2, px:6, my:"auto", background:COLORS.MainBlue }}>
          Back to roles
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmationDialog;