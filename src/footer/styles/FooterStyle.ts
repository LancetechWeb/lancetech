import styled from 'styled-components';
import { COLORS } from '../../core/styles/COLORS';
import { FONTS } from '../../core/styles/FONTS';

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 5rem 12rem;
  max-width: 1920px;
  margin: auto;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }

  .footerChildren {
    display: flex;
    flex-direction: column;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${FONTS.mini};
    color: ${COLORS.LightFont};
  }

  .timeIsThe {
    line-height: 28px;
    max-width: 300px;
  }

  svg {
    width: 1.2rem;
    :hover {
      opacity: 0.7;
    }
  }
  .footerIcons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export default FooterStyle;
