import styled from 'styled-components';
import { COLORS } from '../../core/styles/COLORS';
import { NavStyleProps } from '../types/nav.types';

const { DarkBlue3 } = COLORS;

const NavStyle = styled.div<NavStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  position: fixed;
  background-color: ${({ navFixed }) => (navFixed ? '' : DarkBlue3)};
  left: 0;
  right: 0;
  z-index: 20;

  @media only screen and (max-width: 700px) {
    padding: 1rem;
  }

  .webNavLogo {
    display: none;
    @media only screen and (max-width: 1200px) {
      display: block;
    }
  }

  .webNavButtons {
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  a {
    color: ${COLORS.LightFont};
    text-decoration: none;
    font-weight: 500;
  }

  button {
    font-weight: 700;
  }
  .navLinks {
    display: flex;
    gap: 2rem;
  }

  .active,
  a:hover {
    text-decoration: underline;
    color: ${COLORS.MainBlue};
  }

  .menuIcon {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    .menuIcon {
      display: block;
    }
  }
`;

export default NavStyle;
