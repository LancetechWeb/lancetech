import styled from 'styled-components';
import { FONTS } from './core/styles/FONTS';

const { large, midLarge } = FONTS;

const AppStyle = styled.div`
  h1 {
    font-size: ${large};
    font-weight: 700;
    line-height: 64px;

    @media only screen and (max-width: 600px) {
      font-size: ${midLarge};

      br {
        display: none;
      }
    }
  }
`;

export default AppStyle;
