
import MeetPNG from '../../../assets/Meet_With.png';
import meetDotPat from '../../../assets/Meet_Dot_Pattern.svg';
import { MeetWithStyle } from '../../styles/HomeStyle';
import Button from '../../../core/styles/Button';

const MeetWith = () => {
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
            Designers and programmers and managers have become so accustomed to working remotely, even for complex changing Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi <br />
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni quo ab non? Error qui, iste consequuntur quasi
          </p>
          <div>
            <Button>Get Started for Free</Button>
          </div>
          <p className="meetSecondP">
            “The following article covers a topic that has recently moved to center stage–at least it seems that way. If you’ve been
            thinking you need to know more about outsourcing, here’s your opportunity.”
          </p>
          <h4>Daniel, Product Manager, Lancetech</h4>
        </div>
      </div>
    </MeetWithStyle>
  );
};

export default MeetWith;
