import { Box, Typography } from '@mui/material'
import React from 'react'
import { COLORS } from '../styles/COLORS'
import Button from '../styles/Button'
import { useNavigate } from 'react-router-dom'
import sleepy_bear from '../../assets/sleepy_bear.png'

const ErrorComponent = () => {
    const navigate = useNavigate()

  return (
   <Box sx={{
        display:"flex", 
        alignItems:"center", 
        gap:10, 
        width:"100%", 
        background:COLORS.LightGrey,
        py:25
   }}>
    <Box sx={{width:"50%", display:"flex", justifyContent:"end"}}>
        <img src={sleepy_bear} alt="sleepy_bear"/>
    </Box>
    <Box sx={{width:"50%"}}>
        <Typography variant='h1'>OOPS! PAGE <br/> NOT FOUND </Typography>
        <Typography sx={{py:2}}>You must have navigated to the wrong link. </Typography>
        <Button onClick={()=>navigate("/home")}>BACK TO HOME</Button>
    </Box>
   </Box>
  )
}

export default ErrorComponent