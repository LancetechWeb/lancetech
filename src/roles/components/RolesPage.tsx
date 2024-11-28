import { Box, Typography } from "@mui/material";
import { RolesStyle } from "../styles/rolesStyle";
import { COLORS } from "../../core/styles/COLORS";
import useGetRoles from "../../core/hooks/useGetRoles";
import { Outlet } from "react-router-dom";
import RoleSearchComponent from "./RoleSearchComponent";
import RolesDisplay from "./RolesDisplay";

const RolesPage = () => {
  const { LightBackground } = COLORS;

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
      <RoleSearchComponent/>
      <Box sx={{ display: 'flex', maxWidth:"1920px", mx:"auto", py:2}}>
        <RolesDisplay/>
         <Outlet/>
      </Box>
    </RolesStyle>
  );
};

export default RolesPage;
