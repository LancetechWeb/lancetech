import { useNavigate, NavLink } from 'react-router-dom';
import Logo from '../../core/components/Logo';
import Button from '../../core/styles/Button';

const NavButtonComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/roles');
  };

  return (
    <>
      <Logo />
      <div className="navLinks">
        <NavLink to="" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Contact
        </NavLink>
      </div>
      <Button onClick={handleNavigate}>See roles</Button>
    </>
  );
};

export default NavButtonComponent;
