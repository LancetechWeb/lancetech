import { useNavigate, NavLink } from 'react-router-dom';
import Logo from '../../core/components/Logo';
import Button from '../../core/styles/Button';
import LoginMenu from './LoginMenu';
import { Box } from '@mui/material';

const NavButtonComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = async() => {
    navigate('/roles');
  };

  return (
    <>
      <Logo />
      <Box className="navLinks">
        <NavLink to="" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Contact
        </NavLink>
      </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:1}}>
        <Button onClick={handleNavigate}>See roles</Button>
        <LoginMenu/>
      </Box>
    </>
  );
};

export default NavButtonComponent;
