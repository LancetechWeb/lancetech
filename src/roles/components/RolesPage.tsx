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
import useIDBImages from "../../core/hooks/useIDBImages";
import { MiscImagesIds } from "../../core/types/core.types";
import { IDBStores } from "../../utils/indexedDB/types/indexedDB.types";
import { getVariable } from "../../utils/misc/env.misc";

const RolesPage = () => {
  const { LightBackground } = COLORS;
  const {roleId} = useParams()
  const [searchParams] = useSearchParams();

  const applyParamsValue = searchParams.get('apply');

  const role : Role | undefined = useSelector((state:RootState)=>selectRoleById(state, roleId ?? ''))


  // hooks
  useGetRoles()    

  // get image
  const rolesImgUrl = `${getVariable("BASE_URL")}/images/get-image/${MiscImagesIds.ROLES_HEADER}`;
  const rolesHeaderImage = useIDBImages(rolesImgUrl, IDBStores.MISC_IMAGES, MiscImagesIds.ROLES_HEADER);

  return (
    <RolesStyle style={{ backgroundColor: LightBackground,  }}>
      {!applyParamsValue && 
        <Box className="rolesHeader" sx={{
          background: `linear-gradient(to right, rgba(2, 18, 44, 1), rgba(2, 26, 63, 0.7)), url(${rolesHeaderImage})`,
          backgroundSize: "cover",
          height:"40rem",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
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
