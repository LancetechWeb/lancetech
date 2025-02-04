import styled from 'styled-components';
import { COLORS } from '../../core/styles/COLORS';

export const OurTeamsStyle = styled.div`
  background-color: ${COLORS.LightBackground};

  .teamsWrapper {
    padding: 5rem;

    @media only screen and (max-width: 900px) {
      padding: 5rem 2rem;
    }
  }

  .teamCont {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;

    h3 {
      color: ${COLORS.LightHeader};
      font-size: 20px;
    }
    p {
      color: ${COLORS.LightFont};
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      h3 {
        margin: 0;
      }
    }
  }
`;
