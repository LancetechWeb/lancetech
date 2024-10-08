import React, { useState } from 'react';
import { Box, Typography, Icon, TextField, Button, IconButton } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { COLORS } from '../../core/styles/COLORS';
import { RootState } from '../../store';
import ContactUsStyle from '../styles/ContactUsStyle';
import { MuiTelInput } from 'mui-tel-input'

const validationSchema = Yup.object({
  yourName: Yup.string().required('Please put in your name'),
  email: Yup.string().email('Enter valid email').required('Required'),
  phoneNumber: Yup.string(),
  explanation: Yup.string().required('Please tell us about the project'),
});

const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = useState('soda');
  const navigate = useNavigate();
  const previousPage = useSelector((state:RootState) => state.coreReducer.previousPage);

  const { LightFont, FadedWhite, LightBlue, LightGrey, MainBlue } = COLORS;

  const formik = useFormik({
    initialValues: {
      yourName: '',
      email: '',
      phoneNumber: '',
      explanation: '',
    },

    validationSchema: validationSchema,

    onSubmit: (values, input) => {
      const fields = { ...values, phoneNumber };
      console.log('values from contact page Form', fields);
      input.resetForm();
      setPhoneNumber('');
    },
  });

  const handlePhoneNumber = (e:string) => {
    console.log('phone number', e);
    setPhoneNumber(e);
  };

  const textFieldStyles = {
    width: '100%',

    '& label.Mui-focused': {
      color: LightFont,
    },
    '&  label': {
      color: LightFont,
    },
    '& input': {
      color: FadedWhite,
    },
    '& .MuiInputBase-input': {
      color: FadedWhite,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '0.5px solid',
        borderColor: LightGrey,
      },
      '&:hover fieldset': {
        borderColor: LightBlue,
      },
      '& ::placeholder': {
        color: LightFont,
      },
    },
  };

  const handleBack = () => {
    navigate(previousPage);
  };

  return (
    <ContactUsStyle>
      <Box className="contactUsLeft" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 15, left: 10 }}>
          <ArrowBackIosIcon sx={{ color: FadedWhite }} />
          <Typography sx={{ color: FadedWhite }}>Back</Typography>
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%', maxWidth: '50rem' }}>
          <Icon className="connectImage">connect_without_contact</Icon>
          <Typography variant="h1" sx={{ fontFamily: 'inherit' }}>
            Let's level up your <br /> brand, together
          </Typography>
        </Box>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '50rem',
            height: '60%',
          }}
        >
          <TextField
            fullWidth
            id="yourName"
            name="yourName"
            label="Name"
            sx={textFieldStyles}
            value={formik.values.yourName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.yourName && Boolean(formik.errors.yourName)}
            helperText={formik.touched.yourName && formik.errors.yourName}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            sx={textFieldStyles}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <MuiTelInput 
            fullWidth
            variant="outlined"
            value={phoneNumber} 
            defaultCountry={'US'}
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            sx={textFieldStyles}
            onChange={handlePhoneNumber} 
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

          <TextField
            fullWidth
            id="explanation"
            name="explanation"
            label="How can we help?"
            sx={textFieldStyles}
            value={formik.values.explanation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.explanation && Boolean(formik.errors.explanation)}
            helperText={formik.touched.explanation && formik.errors.explanation}
            multiline
            rows={5}
            placeholder="Tell us a little about the project"
          />

          <Button type="submit" variant="contained" sx={{ bgcolor: MainBlue, py: 2 }}>
            Get Started
          </Button>
        </form>
      </Box>
      <Box className="contactUsRight" />
    </ContactUsStyle>
  );
};

export default ContactUs;