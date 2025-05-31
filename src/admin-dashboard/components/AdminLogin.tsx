import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { darkBackgroundTextFieldStyles } from '../../core/styles/textField.styles';
import { COLORS } from '../../core/styles/COLORS';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setSnackbar, setUser } from '../../core/reducers/coreSlice';
import Logo from '../../core/components/Logo';
import { loginComponentStyles } from '../styles/admin.styles';
import { useNavigate } from 'react-router-dom';
import { getVariable } from '../../utils/misc/env.misc';
import TextFieldComponent from '../../form-fields/components/TextFieldComponent';
import { useForm } from 'react-hook-form';
import { AdminLoginFormType } from '../types/dashboard.types';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = new Date();

  const handleLogin = async (formValues: AdminLoginFormType) => {
    const postData = formValues;

    try {
      const response = await axios.post(`${getVariable('BASE_URL')}/authenticate/sign-in`, postData, {
        withCredentials: true,
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem(getVariable('TOKEN_KEY'), token);
        dispatch(setIsAuthenticated(true));
        dispatch(setUser(user));
        dispatch(setSnackbar({ type: 'success', message: 'logged in successfully' }));
        navigate('/admin/dashboard');
      }
    } catch (error) {
      if (error instanceof AxiosError)
        dispatch(setSnackbar({ type: 'error', message: `oops! there was an error signing in: ${error.response?.data.message}` }));
      else dispatch(setSnackbar({ type: 'error', message: `oops! an unknownn error occurred: ${error}` }));
    }
  };

  // custom hooks
  const { control, handleSubmit } = useForm<AdminLoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSubmit(handleLogin);
  };

  const compRef = useRef<HTMLElement>();

  // to scroll to the bottom in phones
  // so the whole page can be seen
  useEffect(() => {
    if (compRef.current) compRef.current.scrollIntoView();
  }, []);

  return (
    <Box sx={loginComponentStyles}>
      <Box>
        {' '}
        <Logo noText />{' '}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          py: 10,
          px: 4,
          border: `1px solid ${COLORS.MainBlue}`,
          borderRadius: '5px',
          width: '20%',
          minWidth: '250px',
          maxWidth: '380px',
        }}
        component="form"
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextFieldComponent<AdminLoginFormType>
          id="outlined-basic"
          name="email"
          label="Email"
          variant="outlined"
          control={control}
          InputLabelProps={{
            style: { color: 'white' }, // Label color
          }}
          onKeyDown={handleKeyDown}
          sx={darkBackgroundTextFieldStyles}
          rules={{ required: 'email is required' }}
        />

        <TextFieldComponent<AdminLoginFormType>
          id="outlined-basic"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          control={control}
          InputLabelProps={{
            style: { color: 'white' }, // Label color
          }}
          onKeyDown={handleKeyDown}
          sx={darkBackgroundTextFieldStyles}
          rules={{ required: 'password is required' }}
        />

        <Button variant="contained" type="submit" sx={{ width: '100%', mt: 5, py: 2 }}>
          Login
        </Button>
      </Box>
      <Box
        ref={compRef}
        sx={{
          justifySelf: 'flex-start',
          position: 'absolute',
          bottom: 50,
          color: COLORS.LightFont,
        }}
      >
        <Typography variant="caption">© {today.getFullYear()} Lancetech Services, Ltd. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default AdminLogin;
