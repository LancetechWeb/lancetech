import React from 'react';
import TorusImage from '../../../assets/Torus.svg';
import EllipseImage from '../../../assets/Ellipse.svg';
import { Box } from '@mui/material';
import { COLORS } from '../../../core/styles/COLORS';
import { HeaderStyle } from '../../styles/HeaderStyle';

const Header = () => {
  const { DarkBlue3 } = COLORS;

  return (
    <HeaderStyle id="homeHeader">
      <img src={TorusImage} alt="torusImage" className="headerImg torusImg" />
      <img src={TorusImage} alt="torusImage" className="headerImg torusImg2" />
      <img src={EllipseImage} alt="EllipseImage" className="headerImg ellipseImg" />

      <div className="mobileWebAnime ">
        <svg className="loader" width="45" height="45" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.92 26.0239C12.1826 26.0239 8.34263 22.1839 8.34263 17.4466C8.34263 12.7106 12.1826 8.8706 16.92 8.8706C21.656 8.8706 25.496 12.7106 25.496 17.4466C25.496 22.1839 21.656 26.0239 16.92 26.0239ZM16.92 0.989256C7.82929 0.989256 0.459961 8.35728 0.459961 17.4466C0.459961 26.5373 7.82929 33.9053 16.92 33.9053C26.0093 33.9053 33.3786 26.5373 33.3786 17.4466C33.3786 8.35728 26.0093 0.989256 16.92 0.989256Z"
            fill="#5897D7"
          />
          <path
            d="M5.71583 15.824C7.24383 15.824 8.58516 14.9146 9.27983 13.552C10.6985 10.7733 13.5852 8.87065 16.9198 8.87065C20.2545 8.87065 23.1412 10.7733 24.5585 13.552C25.2545 14.9146 26.5945 15.824 28.1238 15.824C31.0038 15.824 32.9745 12.8066 31.7078 10.2186C29.0318 4.7533 23.4158 0.989306 16.9198 0.989306C10.4225 0.989306 4.80649 4.7533 2.13049 10.22C0.865159 12.8066 2.83449 15.824 5.71583 15.824Z"
            fill="#E0ECF9"
          />
        </svg>
        <div className="barSVGCont">
          <code className="">loading...</code>
          <div className="barSVG2 barImg"></div>
          <div className="barSVG3 barImg"></div>
          <div className="mobileIconCont"></div>
        </div>
      </div>
      <Box className="headerTitle">
        <h2>
          Product design, <br />
          <span> Mobile and Web apps </span>
        </h2>
      </Box>
      <div className="waveSVG">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            style={{ fill: DarkBlue3 }}
          ></path>
        </svg>
      </div>
    </HeaderStyle>
  );
};

export default Header;
