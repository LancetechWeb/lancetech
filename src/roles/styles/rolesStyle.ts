import styled from 'styled-components';


export const RolesStyle = styled.div`
  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 80px;
    }
  }
  @media only screen and (max-width: 600px) {
    h5 {
      font-size: 1rem;
    }
  }

  .rolesHeader {
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #ffffff;
    padding: 0 1rem;
    transition: all 0.8s;

    #rolesTitle {
      font-size: 70px;

      @media only screen and (max-width: 600px) {
        font-size: 45px;
      }
    }

    .btnCont {
      margin-bottom: 5rem;
    }
  }

  .jobDescription {
    height: 8.2rem;
    padding: 0 0 1rem 0;
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 12px;
  }
`;
