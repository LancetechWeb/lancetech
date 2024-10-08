import styled from 'styled-components';
import { movingShape, bouncingShape, rotate, increaseWidth } from '../../core/styles/ANIMATION';
import { COLORS } from '../../core/styles/COLORS';

const { DarkBlue3 } = COLORS;

export const HeaderStyle = styled.div`
  background-color: ${DarkBlue3};
  color: ${COLORS.White};
  height: 55rem;
  position: relative;
  display: flex;
  gap: 2rem;

  align-items: center;
  justify-content: center;

  h2 {
    color: #def4ff;
    font-size: 80px;
    text-align: center;

    span {
      color: ${COLORS.LightBlue};
    }

    @media only screen and (max-width: 900px) {
      font-size: 70px;
    }
  }

  .headerTitle {
    @media only screen and (max-width: 900px) {
      padding: 0 2rem;
    }
  }

  .headerImg {
    position: absolute;
    z-index: 10;
  }

  .torusImg {
    left: 10rem;
    animation: ${movingShape} 8s ease-in-out infinite;

    @media only screen and (max-width: 700px) {
      display: none;
    }
  }

  .torusImg2 {
    right: -10rem;
    bottom: -10rem;
    transform: rotate(90deg);
  }

  .ellipseImg {
    right: 40px;
    animation: ${bouncingShape} 8s ease-in-out infinite;
    width: 20rem;
    height: 5rem;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .mobileWebAnime {
    border: 1px solid ${COLORS.LightBlue};
    width: 10rem;
    height: 20rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    border-radius: 10px;

    @media only screen and (max-width: 1200px) {
      display: none;
    }

    .loader {
      align-self: end;
      animation: ${rotate} 5s ease-in-out infinite;
    }

    .barSVGCont {
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-self: end;

      .barImg {
        height: 8px;
        background-color: #def4ff;
      }

      .barSVG1 {
        animation: ${increaseWidth} 3s ease-in-out infinite;
      }
      .barSVG2 {
        animation: ${increaseWidth} 5s ease-in-out infinite;
        border: 1px solid #def4ff;
        background: none;
      }
      .barSVG3 {
        height: 1rem;
      }
    }

    .mobileIconCont {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .mobileCircleIcon {
        border: 1px solid #def4ff;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
  }

  .waveSVG {
    position: absolute;
    bottom: -90px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    /* transform: rotate(180deg); */
  }

  .waveSVG svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 90px;
  }

  .waveSVG .shape-fill {
    fill: ${COLORS.DarkBlue3};
  }
`;
