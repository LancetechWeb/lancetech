import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { textFieldStyles } from '../../core/styles/textField.styles'
import { COLORS } from '../../core/styles/COLORS'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated } from '../../core/reducers/coreSlice'
import Logo from '../../core/components/Logo'
import { loginComponentStyles } from '../styles/admin.styles'

const AdminLogin = () => {
  const dispatch = useDispatch()

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
        const response = await axios.post('http://localhost:9000/authenticate/sign-in', postData,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          },
        );

        console.log("response", response);
        if(response.status === 200){
          dispatch(setIsAuthenticated(true))
          //  navigate('/admin/dashboard')
        }

        // setData(response.data)
      } catch (error) {
        console.log("error", error)
      }
  };



    
  return (
    <Box 
      sx={loginComponentStyles}
    >
      <Logo noText/>

      <Box sx={{ 
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center", 
        justifyContent:"center", 
        gap:3, 
        py:10,
        px:5,
        border:`1px solid ${COLORS.MainBlue}`,
        borderRadius:"5px",
        width:"20%",
        minWidth:"200px",
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
      <Typography 
         variant='caption'

        sx={{
          justifySelf:"flex-start", 
          position:"absolute", 
          bottom:5,
          color:COLORS.LightFont
        }}>

        © {today.getFullYear()} Lancetech Services, Ltd. All rights reserved.
      </Typography>
    </Box>
  )
}

export default AdminLogin