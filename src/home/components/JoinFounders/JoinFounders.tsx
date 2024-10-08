import CompImg from '../../../assets/Join_Founders.svg';
import { JoinFoundersStyle } from '../../styles/HomeStyle';

const JoinFounders = () => {
  return (
    <JoinFoundersStyle>
      <h1>
        Join other successful <br />
        founders who use our service
      </h1>
      <img src={CompImg} alt="Join Founders" className="JoinFoundersImage" />
    </JoinFoundersStyle>
  );
};

export default JoinFounders;
