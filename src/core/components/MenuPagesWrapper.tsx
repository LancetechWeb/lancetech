import { useState, useRef, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setScrollIcon } from '../reducers/uiSlice';
import NavBar from '../../navbar/components/NavBar';
import MobileMenu from '../../navbar/components/MobileMenu';

const MenuPagesWrapper = () => {
  const [navfixed, setNavfixed] = useState<boolean>(false);
  const navBarRef = useRef();
  const dispatch = useDispatch();

  const options = useMemo(() => {
    return { root: null, threshold: 0.89, rootMargin: '0px' };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setNavfixed(true);
        dispatch(setScrollIcon(false));
      } else {
        setNavfixed(false);
        dispatch(setScrollIcon(true));
      }
    }, options);
    if (navBarRef.current) observer.observe(navBarRef.current);
  }, [navBarRef, options, dispatch]);



  return (
    <div style={{}}>
      <NavBar navfixed={navfixed} />
      <MobileMenu />
      <Box ref={navBarRef} sx={{ height: '80vh' }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default MenuPagesWrapper;
