import { useState, useRef, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setScrollIcon } from '../reducers/uiSlice';
import NavBar from '../../navbar/components/NavBar';
import MobileMenu from '../../navbar/components/MobileMenu';

const Root = () => {
  const [navFixed, setNavFixed] = useState<boolean>(false);
  const navBarRef = useRef();
  const dispatch = useDispatch();

  const options = useMemo(() => {
    return { root: null, threshold: 0.89, rootMargin: '0px' };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setNavFixed(true);
        dispatch(setScrollIcon(false));
      } else {
        setNavFixed(false);
        dispatch(setScrollIcon(true));
      }
    }, options);
    if (navBarRef.current) observer.observe(navBarRef.current);
  }, [navBarRef, options, dispatch]);

  return (
    <div style={{}}>
      <NavBar navFixed={navFixed} />
      <MobileMenu />
      <Box ref={navBarRef} sx={{ height: '80vh' }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
