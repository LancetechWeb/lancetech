import { useNavigate } from 'react-router-dom';
import lancetechlOGO from '../../assets/lancetech.svg';
import lancetechlOGONoText from '../../assets/lancetech-logo-no-text.svg';
import { Box } from '@mui/material';

const Logo = ({noText}:{noText?:boolean}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
      {!noText && <img src={lancetechlOGO} alt="lancetechLOGO" />}
      {noText && <img src={lancetechlOGONoText} alt="lancetechLOGO" />}
    </Box>
  );
};

export default Logo;
