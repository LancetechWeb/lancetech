import { Box, Typography, Card, CardContent } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS';
import { Role } from '../types/roles.types';
import { getDayHoursAgo } from '../../utils/date.helpers';
import { FONTS } from '../../core/styles/FONTS';
import { useParams } from 'react-router-dom';

const RoleCard = ({role, onClick}:{role:Role; onClick:(roleId:string)=> void}) => {
    const {roleId} = useParams()

    const {id, title, rank, remote} = role

  return (
    <Card
        sx={{
            maxHeight: "320px",
            width: "300px", 
            flexShrink: 0, // Prevent card from shrinking
            cursor:"pointer",
            p:2,
            position:"relative",
            ...(roleId && roleId === id && {border:`2px solid ${COLORS.LightBlue}`}),
            boxShadow:"none"
        }}
        onClick={()=> onClick(id)}
    >
        <Box sx={{position:"absolute", right:5, top:5, zIndex:1000}}>
        </Box>
        <CardContent>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, m: 0, lineHeight: '20px' }}>
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: 14, fontWeight: 700 }} >{rank}</Typography>
                </Box>
            </Box>

            <Typography sx={{ my: '1rem', fontWeight: 700 }} color="text.secondary">{remote}</Typography>
            <Typography sx={{color:COLORS.LightBlue, fontSize:FONTS.mini}}>Posted {getDayHoursAgo(role.createdAt)}</Typography>
        </CardContent>
    </Card>
  )
}

export default RoleCard