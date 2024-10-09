import { Box, Typography } from '@mui/material'
import Button from '../styles/Button'
import { useNavigate } from 'react-router-dom'
import sleepy_bear from '../../assets/sleepy_bear.png'
import { ErrorStyle } from '../styles/ErrorStyle'

const ErrorComponent = () => {
    const navigate = useNavigate()

  return (
   <ErrorStyle >
    <Box className="errorImage">
        <img src={sleepy_bear} alt="sleepy_bear"/>
    </Box>
    <Box sx={{width:"50%"}}>
        <Typography variant='h1'>OOPS! PAGE <br/> NOT FOUND </Typography>
        <Typography sx={{py:2}}>You must have navigated to the wrong link. </Typography>
        <Button onClick={()=>navigate("/home")}>BACK TO HOME</Button>
    </Box>
   </ErrorStyle>
  )
}

export default ErrorComponent