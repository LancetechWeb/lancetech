import { Box, Typography } from "@mui/material";
import RoleCard from "./RoleCard";
import { RolesStyle } from "../styles/rolesStyle";
import { COLORS } from "../../core/styles/COLORS";
import useGetRoles from "../../core/hooks/useGetRoles";
import { useSelector } from "react-redux";
import { selectRoles } from "../selectors/roles.selectors";
import { Outlet, useNavigate, useParams } from "react-router-dom";


const RolesPage = () => {
  const navigate = useNavigate()
  const { LightBackground } = COLORS;
  const {roleId} = useParams()

  // selectors
  const roles = useSelector(selectRoles)

  // hooks
  useGetRoles()    

  const handleRoleClick = (id:string) =>{
    navigate(`/roles/${id}`)

    console.log("roleId", id)
  }

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
      <Box sx={{ display: 'flex',   maxWidth:"1920px", mx:"auto", py:2 }}>
        <Box 
        className="roleCards" 
        sx={{
          display:"flex", 
          flexDirection:roleId ? "column" : "row", 
          flexWrap:roleId ? "no-wrap":"wrap",
          justifyContent:roleId ? "" : "center",
          alignItems:"center",
          minWidth:"fit-content",
          height:roleId ? "100vh" : "100%",
          gap: "2.5rem",
          overflowY: "auto",
          p:2,

          "& :hover":{
            scale:1.01
          },
        }}>
          { roles.map(role => <RoleCard role={role} onClick={handleRoleClick}/>)}    
        </Box>
         <Outlet/>
      </Box>
    </RolesStyle>
  );
};

export default RolesPage;
