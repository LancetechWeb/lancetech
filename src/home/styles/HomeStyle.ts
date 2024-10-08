import styled from 'styled-components';
import { COLORS } from '../../core/styles/COLORS';
import { FONTS } from '../../core/styles/FONTS';

const { MainBlue } = COLORS;

export const HomeStyle = styled.div`
  overflow: hidden;

  .stickyNav {
    background-color: ${MainBlue};
  }

  h4 {
    font-size: ${FONTS.small};
    margin: 0;
    line-height: 34px;
  }
`;

export const DiscoverStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem;

  h1 {
    text-align: center;
  }

  .discDown {
    display: flex;
    justify-content: center;
    gap: 6rem;

    @media only screen and (max-width: 1024px) {
      gap: 1rem;
    }

    .discChildren {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;

      @media only screen and (max-width: 900px) {
        align-items: center;
        text-align: center;
      }
      @media only screen and (max-width: 760px) {
        align-items: center;
        text-align: center;
      }

      :hover {
        .h4 {
          transform: scale(1.5);
        }
      }

      .discSVG {
        width: 5.5rem;
        box-shadow: 0 32px 54px 0 rgba(68, 140, 179, 0.23);
      }

      p {
        font-size: ${FONTS.mini};
        color: ${COLORS.LightFont};
        line-height: 28px;
      }

      .pCont {
        max-width: 17rem;
      }

      .ArrowSVG {
        position: absolute;
        top: 2rem;
        right: -4rem;

        img {
          width: 14rem;
          height: 4.5rem;
        }

        @media only screen and (max-width: 1024px) {
          display: none;
        }
      }
    }

    #discChild2 {
      margin-top: 5rem;
      #ArrowSVG2 {
        transform: scaleY(-1) rotate(-30deg);
      }

      @media only screen and (max-width: 900px) {
        margin: 0;
      }
    }

    #discChild3 {
      margin-top: 10rem;
      @media only screen and (max-width: 900px) {
        margin: 0;
      }
    }

    @media only screen and (max-width: 760px) {
      flex-direction: column;
    }
  }
`;

export const JoinFoundersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    .JoinFoundersImage {
      width: 90%;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 0 2rem;

    .JoinFoundersImage {
      width: 100%;
    }
  }

  h1 {
    text-align: center;
  }
`;

export const GrowWithStyle = styled.div`
  background: #f9fafa;

  .GrowWithWrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    padding: 7rem 5rem 3rem 5rem;
    max-width: 1920px;
    margin: auto;

    @media only screen and (max-width: 500px) {
      padding: 7rem 2rem 3rem 2rem;
    }
  }

  .growWithChild {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;

    p {
      margin: 0;
      line-height: 28px;
      color: ${COLORS.LightFont};
    }
  }

  .growImgCont {
    position: relative;
    .growDotPat {
      position: absolute;
      top: -3rem;
      left: -5rem;
    }

    @media only screen and (max-width: 1024px) {
      .GrowPNG {
        width: 100%;
      }

      .growDotPat {
        width: 30%;
      }
    }

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const MeetWithStyle = styled.div`
  background: ${COLORS.LightBackground};

  .MeetWithWrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    padding: 3rem 5rem;
    max-width: 1920px;
    margin: auto;

    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
    }

    @media only screen and (max-width: 500px) {
      padding: 3rem 2rem;
    }
  }

  .meetLeft {
    .meetImgCont {
      position: relative;

      .MeetPNG {
        position: relative;
        z-index: 2;

        @media only screen and (max-width: 1024px) {
          width: 80%;
        }
      }
      .meetDotPat {
        position: absolute;
        bottom: -2rem;
        left: -3rem;
        z-index: 1;

        @media only screen and (max-width: 1024px) {
          width: 30%;
        }
      }

      @media only screen and (max-width: 900px) {
        display: none;
      }
    }
  }
  .meetRight {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    flex-basis: 35%;
    /* border: 2px solid red; */

    .meetFirstP {
      line-height: 32px;
    }

    button {
      margin: 2rem 0;
    }

    .meetSecondP {
      font-size: ${FONTS.mini};
      line-height: 25px;
      color: ${COLORS.LightFont};
    }

    h4 {
      font-size: ${FONTS.mini};
    }
  }
`;

export const TestimonialsStyle = styled.div`
  justify-content: space-around;
  padding: 5rem 10rem;
  max-width: 1920px;
  margin: auto;
  position: relative;

  @media only screen and (max-width: 1000px) {
    padding: 5rem 4rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 5rem 3rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 5rem 2rem;
  }
`;

export const RequestStyle = styled.div`
  background-color: ${COLORS.DarkBlue2};
  position: relative;

  .requestWrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 5rem 3rem 2rem 3rem;
    color: ${COLORS.White};
    overflow: hidden;
    max-width: 1920px;
    margin: auto;
  }
  .requestImg {
    position: absolute;
  }

  .requestLeftSVG {
    top: 5rem;
    left: 0;

    @media only screen and (max-width: 960px) {
      display: none;
    }
  }

  .requestRightSVG {
    bottom: -5rem;
    right: 0;
  }

  .requestTop {
    display: flex;
    justify-content: space-around;
    line-height: 28.8px;

    .topLeft {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .whiteLogo {
    max-width: 185px;
  }

  .copyright {
    text-align: center;
    font-size: ${FONTS.mini};
  }

  #filled-multiline-flexible,
  #filled-multiline-flexible ::placeholder {
    color: #ffffff;
  }

  #filled-multiline-flexible-label {
    color: rgba(250, 250, 250, 0.5);
  }

  hr {
    width: 90%;
    margin: 2rem;
    border: none;
    border-top: 0.5px solid;
    opacity: 0.2;
  }
`;
