import { Box, useMediaQuery } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS'
import RoleCard from './RoleCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRoles } from '../selectors/roles.selectors'

const RolesDisplay = () => {
    const navigate = useNavigate()
    const {roleId} = useParams()
    const isMobile = useMediaQuery("(max-width:800px)")

     // selectors
    const roles = useSelector(selectRoles)

    const handleRoleClick = (id:string) =>{
        navigate(`/roles/${id}`)
    
        console.log("roleId", id)
    }

  return (
    <Box 
        className="roleCards" 
        sx={{
            display:isMobile && roleId ? "none" : "flex", 
            flexDirection:roleId ? "column" : "row", 
            flexWrap:roleId ? "no-wrap":"wrap",
            justifyContent:roleId ? "" : "center",
            alignItems:"center",
            minWidth:"fit-content",
            height:roleId ? "100vh" : "100%",
            gap: "2.5rem",
            overflowY: "auto",
            p:2,
            pt:0,
            ...(roleId && {borderRight:`1px solid ${COLORS.LightGrey}`}),

            "& :hover":{
                scale:1.01
            },
        }}
    >
        { roles.map(role => <RoleCard role={role} onClick={handleRoleClick}/>)}    
    </Box>
  )
}

export default RolesDisplay