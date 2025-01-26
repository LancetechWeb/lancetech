import TeamStyle from '../../styles/team.styles';
import { teamList } from '../__data__/team.data';
import TeamMember from './TeamMember';

const Team = () => {
  return (
    <TeamStyle>
      <div className="teamWrapper">
        <h1 className="teamTitle">
          Meet our <br /> amazing team
        </h1>
        <hr />
        <div className="teamGallery">
          {teamList.map(member => (
            <TeamMember member={member}/>
          ))}
        </div>
        <hr />
      </div>
    </TeamStyle>
  );
};

export default Team;
