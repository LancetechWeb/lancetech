import { Box, Button, Divider, Typography, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectRoleById } from '../selectors/roles.selectors'
import { RootState } from '../../store'
import { useNavigate, useParams } from 'react-router-dom'
import { COLORS } from '../../core/styles/COLORS'
import { getDayHoursAgo } from '../../utils/date.helpers'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { buildQueryParams } from '../helpers'


const RoleDetails = ({id}:{id?:string}) => {
    const navigate = useNavigate()
    const {roleId} = useParams();
    const isMobile = useMediaQuery("(max-width:800px)")


    const actualRoleId = id ?? roleId ?? ""

    const handleApplyNow = () => navigate(`?${buildQueryParams({apply:"true"})}`)

    // selectors
    const role = useSelector((state:RootState)=>selectRoleById(state, actualRoleId))

    if(!role || !role.isActive) return (
        <Box 
            sx={{
                width:"100%", 
                textAlign:"center"
            }}>
                Oops! seems that opening does not exist anymore
        </Box>)

    return (
        <Box 
            sx={{
                width:"100%", 
                p:4, 
                display:"flex", 
                flexDirection:"column", 
                gap:3, 
                background:"white", 
                borderRadius:"5px",
                mx:2
            }}
        >
            <Box sx={{display:"flex", flexDirection:"column", gap:3, alignItems:isMobile ? "start" : "center"}}>
                <Typography variant='h3'>{role.title}</Typography>    
                <Box sx={{display:"flex"}}>
                    <LocationOnOutlinedIcon/> 
                    <Typography sx={{alignSelf:"center"}}> 
                        {role.remote}
                    </Typography>
                </Box>
                <Button variant='contained' sx={{background:COLORS.LightButton}} onClick={handleApplyNow}>
                    Apply now
                </Button>
            </Box>
           
            <Divider/>
            <Box sx={{display:"flex", gap:2}}>
                <Box>
                    <Typography sx={{fontWeight:600}}>Job ID</Typography>
                    <Typography sx={{textWrap:""}}>{role._id}</Typography>
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