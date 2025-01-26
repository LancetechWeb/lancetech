import styled from 'styled-components';
import { COLORS } from '../../core/styles/COLORS';

const { DarkBlue3, DarkBlue4, FadedWhite } = COLORS;

// const contactUsImgURL = `${getVariable("BASE_URL")}/images/get-image/${MiscImagesIds.CONTACT_US}`;

const ContactUsStyle = styled.div`
  display: flex;
  min-height:100vh;

  .contactUsLeft {
    justify-content: center;
    align-items: center;
    padding: 4rem 4rem;
    box-sizing: border-box;
    width: 60%;
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, ${DarkBlue3} 40%, ${DarkBlue4} 100%);
    color: ${FadedWhite};

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
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export default ContactUsStyle;
