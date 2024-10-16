import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { RolesStyle } from '../styles/rolesStyle';
import { COLORS } from '../../core/styles/COLORS';

const RolesPage = () => {
  const { LightFont, LightBackground } = COLORS;

  return (
    <RolesStyle style={{ backgroundColor: LightBackground }}>
      <Box className="rolesHeader">
        <Typography variant="h5" sx={{ fontFamily: 'inherit', textAlign: 'center' }}>
          Your Dream Career Starts here
        </Typography>
        <Typography id="rolesTitle" sx={{ fontFamily: 'inherit', textAlign: 'center' }}>
          Job Opportunities
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: 10 }}>
        <Box className="roleCards" sx={{ maxWidth: '1920px' }}>
          <Card
            sx={{
              pt: 1,
              px: 1,
              boxShadow: '8px 8px 10px 10px #bfbfbf2c',
            }}
          >
            <CardContent>
              <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 800, m: 0, lineHeight: '20px' }}>
                    React Developer
                  </Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 700 }} gutterBottom>
                    Mid Level
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ my: '1rem', fontWeight: 700 }} color="text.secondary">
                Remote contract
              </Typography>
              <Typography className="jobDescription" sx={{ color: LightFont }}>
                Design and develop technical solutions to support business operations Collaborate with project managers, product managers,
                and stakeholders to gather requirements and specifications Lead projects with competing timelines and requirements, while
                exceeding delivery expectations Required Qualifications: 2+ years as a React/Typescript developer focused in React.
                Exceptional Javascript/Typescript fundamentals. Experience with creating applications using React and its ecosystem
                Experience working with RESTful APIs Proficiency in TypeScript
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </RolesStyle>
  );
};

export default RolesPage;
