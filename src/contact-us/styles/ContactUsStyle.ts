import styled from 'styled-components';
import { COLORS } from '../../core/styles/COLORS';
import { getVariable } from '../../utils/misc/env.misc';

const { DarkBlue3, DarkBlue4, FadedWhite } = COLORS;

const contactUsImgURL = `${getVariable("BASE_URL")}/images/get-image/1n88j8eza271BwrTDC-Nq5UIFOhTZYMuD`;

const ContactUsStyle = styled.div`
  display: flex;
  height: 100vh;
  position: relative;

  .contactUsLeft {
    justify-content: center;
    align-items: center;
    padding: 4rem 4rem;
    box-sizing: border-box;
    width: 60%;
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, ${DarkBlue3} 40%, ${DarkBlue4} 100%);
    color: ${FadedWhite};
    overflow: auto;

    @media only screen and (max-width: 1024px) {
      width: 100%;
    }

    @media only screen and (max-width: 600px) {
      padding: 4rem 2rem;
    }

    .connectImage {
      font-size: 3rem;

      @media only screen and (max-width: 600px) {
        font-size: 3rem;
      }
    }
  }

  .contactUsRight {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    width: 40%;
    background-image: url(${contactUsImgURL});
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export default ContactUsStyle;
