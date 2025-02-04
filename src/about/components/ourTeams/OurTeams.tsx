import { OurTeamsStyle } from '../../styles/OurTeams.style';
import { Box } from '@mui/material';
import { OurTeamsData } from '../../data/OurTeams.data';

const OurTeams = () => {
  return (
    <OurTeamsStyle>
      <Box className="teamsWrapper" sx={{ maxWidth: '960px', m: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h2>Our teams</h2>
        {OurTeamsData.map(team => (
          <Box className="teamCont" key={team.team}>
            <h3 style={{ maxWidth: '15rem' }}>{team.team}</h3>
            <p style={{ maxWidth: '30rem' }}>{team.description}</p>
          </Box>
        ))}
      </Box>
    </OurTeamsStyle>
  );
};

export default OurTeams;
