import styled from 'styled-components';

const BtnGroupStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media only screen and (max-width: 800px) {
    top: 6rem;
    right: 2rem;
  }

  button {
    width: 3.5rem;
    height: 3.5rem;
    box-sizing: border-box;
    font-size: 3rem;
    cursor: pointer;
  }
`;

export default BtnGroupStyle;
