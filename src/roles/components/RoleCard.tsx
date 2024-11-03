import { Box, Typography, Card, CardContent } from '@mui/material'
import { COLORS } from '../../core/styles/COLORS';
import { Role } from '../types/roles.types';

const RoleCard = (props:Role) => {
    const { LightFont } = COLORS;

    const {title, rank, remote, description} = props

  return (
    <Card
        sx={{
            pt: 1,
            px: 1,
            boxShadow: '8px 8px 10px 10px #bfbfbf2c',
            maxHeight: "320px",
            width: "300px", // More reasonable width
            flexShrink: 0, // Prevent card from shrinking
            marginRight: "16px" // Optional: adds space between cards
        }}
    >
        <CardContent>
            <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 800, m: 0, lineHeight: '20px' }}>
                {title}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 700 }} gutterBottom>{rank}</Typography>
            </Box>
            </Box>

            <Typography sx={{ my: '1rem', fontWeight: 700 }} color="text.secondary">{remote}</Typography>
            <Typography className="jobDescription" sx={{ color: LightFont }}>{description}</Typography>
        </CardContent>
    </Card>
  )
}

export default RoleCard