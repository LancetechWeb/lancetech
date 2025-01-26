import styled from 'styled-components';

const TeamStyle = styled.div`
  background-color: #f4f4f4;

  .teamWrapper {
    padding: 8rem 15rem;
    max-width: 1440px;
    margin: auto;

    @media only screen and (max-width: 1000px) {
      padding: 8rem 2rem;
    }
  }

  .teamGallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
    gap: 2.5rem;
    margin: 3rem 0;

    .memberName {
      font-weight: 600;
      margin-bottom: 5px;
    }

    .memberTitle {
      font-size: 12px;
    }

    .nameAndTitle {
      margin: 1rem 0;
    }
  }
  
  .teamMember{
    @media only screen and (max-width: 903px) {
      height: 20rem;
    }
  }
`;

export default TeamStyle;
