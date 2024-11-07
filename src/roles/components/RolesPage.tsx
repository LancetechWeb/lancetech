import { Box, Typography } from "@mui/material";
import RoleCard from "./RoleCard";
import { RolesStyle } from "../styles/rolesStyle";
import { COLORS } from "../../core/styles/COLORS";
import useGetRoles from "../../core/hooks/useGetRoles";
import { useSelector } from "react-redux";
import { selectRoles } from "../selectors/roles.selectors";


const RolesPage = () => {
  const { LightBackground } = COLORS;

  // selectors
  const roles = useSelector(selectRoles)

  // hooks
  useGetRoles()    

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
          { roles.map(role => <RoleCard {...role}/>)}    
       </Box>
      </Box>
    </RolesStyle>
  );
};

export default RolesPage;
