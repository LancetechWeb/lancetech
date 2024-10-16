import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { textFieldStyles } from '../../core/styles/textField.styles'
import { COLORS } from '../../core/styles/COLORS'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated } from '../../core/reducers/coreSlice'

const AdminLogin = () => {
  const { DarkBlue3 } = COLORS;
  const dispatch = useDispatch()

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
        sx={{
            width:"100vw", 
            height:"70vh", 
            display:"flex", 
            flexDirection:"column", 
            alignItems:"center", 
            justifyContent:"center", 
            gap:1, 
            // border:"2px solid red"
            backgroundColor:DarkBlue3
            
        }}>

      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleEmail}
      InputLabelProps={{
          style: { color: 'white' }, // Label color
      }}
      sx={textFieldStyles}/>

      <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handlePassword} 
      InputLabelProps={{
        style: { color: 'white' }, // Label color
      }}
      
      sx={textFieldStyles}/>
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      {/* {idArray.map(num=><ImageDisplay id={num}/>)} */}
    </Box>
  )
}

export default AdminLogin
