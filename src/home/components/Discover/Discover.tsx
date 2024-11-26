
import DiscSVG1 from '../../../assets/Discover/DiscSVG1.svg';
import DiscSVG2 from '../../../assets/Discover/DiscSVG2.svg';
import DiscSVG3 from '../../../assets/Discover/DiscSVG3.svg';
import ArrowSVG from '../../../assets/Discover/ArrowSVG.svg';
import { DiscoverStyle } from '../../styles/HomeStyle';

const Discover = () => {
  return (
    <DiscoverStyle>
      <h1>Discover our process</h1>
      <div className="discDown">
        <div className="discChildren" id="discChild1">
          <img src={DiscSVG1} alt="DiscSVG1" className="discSVG" />
          <h4> Strategy development</h4>
          <div className="pCont">
            <p>We collaborate to define clear objectives, identify key challenges, and create tailored solutions that align with your business goals.</p>
          </div>
          <div className="ArrowSVG">
            <img src={ArrowSVG} alt="ArrowSVG" />
          </div>
        </div>
        <div className="discChildren" id="discChild2">
          <img src={DiscSVG2} alt="DiscSVG2" className="discSVG" />
          <h4>
            Product Development <br />
          </h4>
          <div className="pCont">
            <p>From ideation to execution, we design and build innovative, user-centric products that deliver exceptional value.</p>
          </div>
          <div className="ArrowSVG">
            <img src={ArrowSVG} alt="ArrowSVG" id="ArrowSVG2" />
          </div>
        </div>
        <div className="discChildren" id="discChild3">
          <img src={DiscSVG3} alt="DiscSVG3" className="discSVG" />
          <h4>Test, Prototype, Support</h4>
          <div className="pCont">
            <p>We rigorously test and refine solutions, ensuring seamless performance while providing ongoing support for sustained success.</p>
          </div>
        </div>
      </div>
    </DiscoverStyle>
  );
};

export default Discover;
