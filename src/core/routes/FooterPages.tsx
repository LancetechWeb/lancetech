import { Outlet } from 'react-router-dom';
import Footer from '../../footer/components/Footer';

const Footerpages = () => {
  return (
    <div style={{}}>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Footerpages;
