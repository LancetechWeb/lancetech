import { Box, Typography } from "@mui/material";
import { RolesStyle } from "../styles/rolesStyle";
import { COLORS } from "../../core/styles/COLORS";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import RoleSearchComponent from "./RoleSearchComponent";
import RolesDisplay from "./RolesDisplay";
import useGetRoles from "../hooks/useGetRoles";
import RoleApplicationForm from "./role-application-form/RoleApplicationForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectRoleById } from "../selectors/roles.selectors";
import { Role } from "../types/roles.types";

const RolesPage = () => {
  const { LightBackground } = COLORS;
  const {roleId} = useParams()
  const [searchParams] = useSearchParams();

  const applyParamsValue = searchParams.get('apply');

  const role : Role | undefined = useSelector((state:RootState)=>selectRoleById(state, roleId ?? ''))


  // hooks
  useGetRoles()    

  return (
    <RolesStyle style={{ backgroundColor: LightBackground,  }}>
      {!applyParamsValue && 
        <Box className="rolesHeader">
          <Typography variant="h5" sx={{ fontFamily: 'inherit', textAlign: 'center' }}>
            Your Dream Career Starts here
          </Typography>
          <Typography id="rolesTitle" sx={{ fontFamily: 'inherit', textAlign: 'center' }}>
            Job Opportunities
          </Typography>
        </Box>
      }
      {!applyParamsValue && 
        <>
          <RoleSearchComponent/>
          <Box sx={{ display: 'flex', maxWidth:"1920px", mx:"auto", py:2}}>
            <RolesDisplay/>
            <Outlet/>
          </Box>
        </>
      }

      {applyParamsValue && role &&
        <Box sx={{py:15,  mx:"auto",  maxWidth:"1920px"}}>
          <RoleApplicationForm role={role}/>
        </Box>
      }
    </RolesStyle>
  );
};

export default RolesPage;
