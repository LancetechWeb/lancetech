import { Box, Typography } from "@mui/material";
import { roleFixtures } from "../__fixtures__/roles.fixtures";
import RoleCard from "./RoleCard";
import { RolesStyle } from "../styles/rolesStyle";
import { COLORS } from "../../core/styles/COLORS";


const RolesPage = () => {
  const { LightBackground } = COLORS;


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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box className="roleCards" sx={{ maxWidth: '1920px' }}>
          { roleFixtures.map(role => <RoleCard {...role}/>)}    
       </Box>
      </Box>
    </RolesStyle>
  );
};

export default RolesPage;
