import { useNavigate } from 'react-router-dom';
import lancetechlOGO from '../../assets/lancetech.svg';
import lancetechlOGONoText from '../../assets/lancetech-logo-no-text.svg';
import { Box } from '@mui/material';

const Logo = ({noText}:{noText?:boolean}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ cursor: 'pointer', height:"100%" }} onClick={() => navigate('/')}>
      {!noText && <img src={lancetechlOGO} alt="lancetechLOGO" style={{height:"100%"}}/>}
      {noText && <img src={lancetechlOGONoText} alt="lancetechLOGO" style={{height:"100%"}}/>}
    </Box>
  );
};

export default Logo;
