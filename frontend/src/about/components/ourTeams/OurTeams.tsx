import { OurTeamsStyle } from '../../styles/OurTeams.style';
import { Box } from '@mui/material';
import { OurTeamsUtils } from '../../data/OurTeams.data';

const OurTeams = () => {
  return (
    <OurTeamsStyle>
      <Box className="teamsWrapper" sx={{ maxWidth: '960px', m: 'auto' }}>
        <h2>Our teams</h2>
        {OurTeamsUtils.map(team => (
          <Box className="teamCont">
            <h3 style={{ maxWidth: '15rem' }}>{team.team}</h3>
            <p style={{ maxWidth: '30rem' }}>{team.description}</p>
          </Box>
        ))}
      </Box>
    </OurTeamsStyle>
  );
};

export default OurTeams;
