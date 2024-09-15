import { Box, Icon, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setOpenMenu } from '../../core/reducers/uiSlice';
import { COLORS } from '../../core/styles/COLORS';
import Logo from '../../core/components/Logo';
import NavStyle from '../styles/nav.styles';
import NavButtonComponent from './NavButtonComponent';

const NavBar = ({ navFixed }:{navFixed:boolean}) => {
  const dispatch = useDispatch();

  const { MainBlue } = COLORS;

  const handleOpenSideMenu = () => {
    dispatch(setOpenMenu(true));
  };

  return (
    <NavStyle navFixed={navFixed}>
      <Box className="webNavLogo">
        <Logo />
      </Box>
      <Box sx={{ width: '100%' }} className="webNavButtons">
        <NavButtonComponent />
      </Box>

      <IconButton className="menuIcon" onClick={handleOpenSideMenu}>
        <Icon sx={{ fontSize: '2.5rem', color: MainBlue }}>menu_icon</Icon>
      </IconButton>
    </NavStyle>
  );
};

export default NavBar;
