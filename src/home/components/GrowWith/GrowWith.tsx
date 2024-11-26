
import GrowPNG from '../../../assets/Grow_With.png';
import growDotPat from '../../../assets/Grow_Dot_Pattern.svg';
import GrowWith1 from '../../../assets/GrowWith1.svg';
import GrowWith2 from '../../../assets/GrowWith2.svg';
import GrowWith3 from '../../../assets/GrowWith3.svg';
import { GrowWithStyle } from '../../styles/HomeStyle';

const GrowWith = () => {
  return (
    <GrowWithStyle>
      <div className="GrowWithWrapper">
        <div className="leftGrowWith">
          <h1>
            Grow with our <br /> service.
          </h1>
          <div className="growWithChild">
            <img src={GrowWith1} alt="GrowWithChild" />
            <div>
              <h4>Global presence</h4>
              <p>Expand your reach with solutions that connect you to clients and markets worldwide.</p>
            </div>
          </div>
          <div className="growWithChild">
            <img src={GrowWith2} alt="GrowWithChild" />
            <div>
              <h4>Outstanding recognition</h4>
              <p>Elevate your brand with an impactful online presence that sets you apart.</p>
            </div>
          </div>
          <div className="growWithChild">
            <img src={GrowWith3} alt="GrowWithChild" />
            <div>
              <h4>Money for value</h4>
              <p>Invest in innovative solutions that deliver exceptional value and measurable results.</p>
            </div>
          </div>
        </div>
        <div className="growImgCont">
          <img src={GrowPNG} alt="GrowPNG" className="GrowPNG" />
          <img src={growDotPat} alt="growDotPat" className="growDotPat" />
        </div>
      </div>
    </GrowWithStyle>
  );
};

export default GrowWith;
