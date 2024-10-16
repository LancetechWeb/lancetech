

import JoinFounders from './JoinFounders/JoinFounders';
import GrowWith from './GrowWith/GrowWith';
import MeetWith from './Meet with/MeetWith';
import Testimonials from './Testimonials/Testimonials';
// import SendRequest from './SendRequest/SendRequest';
import Team from './TheTeam/Team';
import { Link } from '@mui/material';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import { useSelector } from 'react-redux';
import { HomeStyle } from '../styles/HomeStyle';
import Header from './Header/Header';
import Discover from './Discover/Discover';
import { RootState } from '../../store';

const Home = () => {
  const scrollIcon = useSelector((state:RootState) => state.uIReducer.scrollIcon);

  return (
    <HomeStyle>
      <Header />
      <Discover />
      <Link
        href="#homeHeader"
        className="stickyNav"
        sx={{
          display: scrollIcon ? 'block' : 'none',
          p: 3,
          position: 'fixed',
          zIndex: 10,
          bottom: '2rem',
          right: '2rem',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      >
        <NavigationRoundedIcon sx={{ fill: '#ffffff' }} />
      </Link>
      <JoinFounders />
      <GrowWith />
      <MeetWith />
      <Testimonials />
      <Team />
      {/* <SendRequest /> */}
    </HomeStyle>
  );
};

export default Home;