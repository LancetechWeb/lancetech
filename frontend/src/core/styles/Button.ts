import styled from 'styled-components';
import { COLORS } from './COLORS';
import { ButtonStyleType } from '../types/styles.types';

const Button = styled.button<ButtonStyleType>`
  width: auto;
  border-radius: 5px;
  background-color: #ff7300;
  /* background-color: rgb(25, 166, 100); */
  background: ${({ dormant }) => (dormant ? 'none' : COLORS.MainBlue)};
  border: ${({ dormant }) => (dormant ? '0.5px solid #ffffff' : 'none')};
  padding: 1rem 1.2rem;
  color: #ffff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  :active,
  :hover {
    opacity: 0.8;
  }
`;

export default Button;
