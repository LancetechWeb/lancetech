import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { textFieldStyles } from '../../core/styles/textField.styles'
import { COLORS } from '../../core/styles/COLORS'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setUser } from '../../core/reducers/coreSlice'
import Logo from '../../core/components/Logo'
import { loginComponentStyles } from '../styles/admin.styles'
import { useNavigate } from 'react-router-dom'
import { getVariable } from '../../utils/misc/env.misc'

const AdminLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const today = new Date()

  // local state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  
  const handlePassword =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }
  const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const postData = {
        email,
        password
      };
  
      try {
        const response = await axios.post(`${getVariable("BASE_URL")}/authenticate/sign-in`, postData,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          },
        );

        if(response.status === 200){
          dispatch(setIsAuthenticated(true))
          dispatch(setUser(response.data))
          navigate('/admin/dashboard')
        }

        // setData(response.data)
      } catch (error) {
        console.error("error", error)
      }
  };

  const compRef = useRef<HTMLElement>()

  // to scroll to the bottom in phones
  // so the whole page can be seen
  useEffect(()=>{
    if(compRef.current)
      compRef.current.scrollIntoView()   
  }, [])
    
  return (
    <Box 
      sx={loginComponentStyles}
    >
      <Box> <Logo noText/> </Box>

      <Box sx={{ 
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center", 
        justifyContent:"center", 
        gap:3, 
        py:10,
        px:4,
        border:`1px solid ${COLORS.MainBlue}`,
        borderRadius:"5px",
        width:"20%",
        minWidth:"250px",
        maxWidth:"380px"
      }}>
        <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
          onChange={handleEmail}
          InputLabelProps={{
              style: { color: 'white' }, // Label color
          }}
          sx={textFieldStyles}
        />

        <TextField 
          id="outlined-basic" 
          label="Password" 
          type='password'
          variant="outlined" 
          onChange={handlePassword} 
          InputLabelProps={{
            style: { color: 'white' }, // Label color
          }}
          sx={textFieldStyles}
        />

        <Button variant="contained" onClick={handleLogin} sx={{width:"100%", mt:5, py:2}}>
          Login
        </Button>
      </Box>
      <Box ref={compRef} 
          sx={{
            justifySelf:"flex-start", 
            position:"absolute", 
            bottom:50,
            color:COLORS.LightFont
          }}>
        <Typography 
          variant='caption'
>

          © {today.getFullYear()} Lancetech Services, Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default AdminLogin
