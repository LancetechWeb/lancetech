import TeamStyle, { TeamMemberStyle } from '../../styles/team.styles';
import { TeamList } from '../__fixtures__/Team.fixtures';

const Team = () => {
  return (
    <TeamStyle>
      <div className="teamWrapper">
        <h1 className="teamTitle">
          Meet our <br /> amazing team
        </h1>
        <hr />
        <div className="teamGallery">
          {TeamList.map(member => (
            <div>
              <TeamMemberStyle className="teamMember" memberImage={member.memberImg}>
                {/* <img src={member.memberImg} alt="teamMember" /> */}
              </TeamMemberStyle>
              <div className="nameAndTitle">
                <div className="memberName">{member.memberName}</div>
                <div className="memberTitle">{member.memberTitle}</div>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </TeamStyle>
  );
};

export default Team;
