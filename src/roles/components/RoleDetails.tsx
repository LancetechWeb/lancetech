import { Box, Button, Divider, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectRoleById } from '../selectors/roles.selectors'
import { RootState } from '../../store'
import { useParams } from 'react-router-dom'
import { COLORS } from '../../core/styles/COLORS'
import { getDayHoursAgo } from '../../utils/date.helpers'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const RoleDetails = () => {
    const {roleId} = useParams();

    // selectors
    const role = useSelector((state:RootState)=>selectRoleById(state, roleId ?? ""))



    if(!role || !role.isActive) return <Box>Oops! we do not have that role anymore!</Box>

  return (
    <Box sx={{width:"100%", p:4, display:"flex", flexDirection:"column", gap:3}}>
        <Typography variant='h1' sx={{alignSelf:"center"}}>{role.title}</Typography>    
        <Box sx={{display:"flex"}}>
            <LocationOnOutlinedIcon/> 
            <Typography sx={{alignSelf:"center"}}> 
                {role.remote}
            </Typography>
        </Box>
        <Button variant='contained' sx={{background:COLORS.LightButton, alignSelf:"center"}}>Apply now</Button>
        <Divider/>
        <Box sx={{display:"flex", gap:2}}>
            <Box>
                <Typography sx={{fontWeight:600}}>Job ID</Typography>
                <Typography>{role._id}</Typography>
            </Box>
            <Box>
                <Typography sx={{fontWeight:600}}>Rank</Typography>
                <Typography>{role.rank}</Typography>
            </Box>
            <Box>
                <Typography sx={{fontWeight:600}}>Date Posted</Typography>
                <Typography>{getDayHoursAgo(role.createdAt)}</Typography>
            </Box>
        </Box>
        <Divider/>

        <Box 
            sx={{'& a':{color:COLORS.LightBlue}}}
            dangerouslySetInnerHTML={{ __html: role.description }}
        />
    </Box>
  )
}

export default RoleDetails