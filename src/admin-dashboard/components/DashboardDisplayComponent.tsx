import { Box, Divider } from '@mui/material'
import DashBoardHeader from './DashBoardHeader'

const DashboardDisplayComponent = () => {
  return (
    <Box sx={{
        width:"100%"
    }}>
        <DashBoardHeader/>
        <Divider/>
        DashboardDisplayComponent
    </Box>
  )
}

export default DashboardDisplayComponent