
import IconButton from '@mui/material/IconButton';
import BtnGroupStyle from '../../styles/BtnGroupStyle';
import { COLORS } from '../../styles/COLORS';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';


export const LeftBtn = () => {
  return (
    <BtnGroupStyle style={{ marginRight: '4.5rem' }}>
      <IconButton  sx={{ backgroundColor: COLORS.PaleBlue, border: '1px solid rgba(34, 176, 252, 0.25)' }}>
        <ChevronLeftRoundedIcon sx={{ fontSize: 40, color: '#448CB3' }} />
      </IconButton>
    </BtnGroupStyle>
  );
};

export const RightBtn = () => {
  return (
    <BtnGroupStyle>
      <IconButton  style={{ backgroundColor: '#448CB3' }}>
        <ChevronRightRoundedIcon sx={{ fontSize: 40, color: '#ffffff' }} />
      </IconButton>
    </BtnGroupStyle>
  );
};
