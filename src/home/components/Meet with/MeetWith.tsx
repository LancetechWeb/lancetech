
import MeetPNG from '../../../assets/Meet_With.png';
import meetDotPat from '../../../assets/Meet_Dot_Pattern.svg';
import { MeetWithStyle } from '../../styles/HomeStyle';
import Button from '../../../core/styles/Button';
import { useNavigate } from 'react-router-dom';

const MeetWith = () => {
const navigate = useNavigate();

const handleGetStarted = () => {
  navigate("/contact");
}

  return (
    <MeetWithStyle>
      <div className="MeetWithWrapper">
        <div className="meetLeft">
          <h1>
            Meet with agency <br /> members anytime, <br /> anywhere
          </h1>
          <div className="meetImgCont">
            <img src={MeetPNG} alt="MeetPNG" className="MeetPNG" />
            <img src={meetDotPat} alt="meetDotPat" className="meetDotPat" />
          </div>
        </div>

        <div className="meetRight">
          <p className="meetFirstP">
          Designers, programmers, and managers at Lancetech are experts in remote collaboration. No matter the complexity or scope of 
          your project, our team ensures seamless communication and efficient delivery across time zones. <br />
          <br /> Whether you need agile design updates or continuous project management, we adapt to your needs with flexibility and professionalism. 
          </p>
          <div>
            <Button onClick={handleGetStarted}>Get Started for Free</Button>
          </div>
          <p className="meetSecondP">
          "Outsourcing has become a game-changer for businesses globally. If you've been considering leveraging it, now’s the perfect time to dive in."
          </p>
          <h4>Daniel, Product Manager, Lancetech</h4>
        </div>
      </div>
    </MeetWithStyle>
  );
};

export default MeetWith;
