import { Box, Typography, Icon, Button, IconButton } from '@mui/material';
import * as Yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../core/styles/COLORS';
import { RootState } from '../../store';
import ContactUsStyle from '../styles/ContactUsStyle';
import TextFieldComponent from '../../form-fields/components/TextFieldComponent';
import Label from '../../core/components/Label';
import { useForm } from 'react-hook-form';
import TelephoneInputComponent from '../../form-fields/components/TelephoneInputComponent';
import { yupResolver } from '@hookform/resolvers/yup';
import { setSnackbar } from '../../core/reducers/coreSlice';
import { axiosWrapper } from '../../utils/auth/axiosInstance';

interface ContactUsFormFields {
  name: string;
  email: string;
  phoneNumber: string;
  explanation: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Please put in your name'),
  email: Yup.string().email('Enter valid email').required('Required'),
  phoneNumber: Yup.string().required("Phone Number is required"),
  explanation: Yup.string().required('Please tell us about the project'),
});

const ContactUs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previousPage = useSelector((state:RootState) => state.coreReducer.previousPage);

  const { LightFont, FadedWhite, LightBlue, LightGrey, MainBlue } = COLORS;

  const {control, handleSubmit, reset} = useForm<ContactUsFormFields>({
    resolver:yupResolver(validationSchema),
      defaultValues: {
          name: "",
          email: "",
          phoneNumber: "",
          explanation: "",
        },
  })

    const handleSubmitForm =  async(formValues:ContactUsFormFields) =>{
      console.log(formValues)

     const {data, error} = await axiosWrapper({method:'POST', url:`/contact/contact-us`, data:formValues});
            if(data) {
                dispatch(setSnackbar({type:"success", message:"Request sent successfully"}))
                reset();
            }    
            if(error) dispatch(setSnackbar({type:"error", message:`${error.message}`}))   
    }

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

  const handleKeyEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSubmit(handleSubmitForm)();
    }
  }

  return (
    <ContactUsStyle>
      <Box className="contactUsLeft" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 15, left: 10 }}>
          <ArrowBackIosIcon sx={{ color: FadedWhite }} />
          <Typography sx={{ color: FadedWhite }}>Back</Typography>
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%', maxWidth: '50rem' }}>
          <Icon className="connectImage">connect_without_contact</Icon>
          <Typography variant="h4" sx={{ fontFamily: 'inherit' }}>
            Let's level up your <br /> brand, together
          </Typography>
        </Box>
        <Box 
          component="form" 
          onSubmit={handleSubmit(handleSubmitForm)} 
          sx={{display:"flex", width: '100%', flexDirection:"column", gap:5, maxWidth: '50rem'}}>

          <TextFieldComponent <ContactUsFormFields>
            id="name"
            name='name'
            label={<Label title='Name' required/>}
            variant="outlined"
            control={control}
            sx={textFieldStyles} 
            rules={{}}  
            onKeyDown={handleKeyEvent}   
        />
          <TextFieldComponent <ContactUsFormFields>
            id="email"
            name='email'
            label={<Label title='Email' required/>}
            variant="outlined"
            control={control}
            sx={textFieldStyles} 
            rules={{}}     
            onKeyDown={handleKeyEvent}   
        />

        <TelephoneInputComponent <ContactUsFormFields>
            name='phoneNumber'
            label={<Label title='Phone Number' required/>}
            variant="outlined"
            control={control}
            sx={textFieldStyles} 
            rules={{}}   
            onKeyDown={handleKeyEvent}   
        />
       
          <TextFieldComponent <ContactUsFormFields>
            id="explanation"
            name='explanation'
            label={<Label title='How can we help?' required/>}
            variant="outlined"
            control={control}
            sx={textFieldStyles} 
            rules={{}}    
            multiline
            rows={5}
            placeholder="Tell us a little about the project"   
            onKeyDown={handleKeyEvent}   
        />

          <Button type="submit" variant="contained" sx={{ bgcolor: MainBlue, py: 2 }}>
            Get Started
          </Button>
        </Box>
      </Box>
      <Box className="contactUsRight" />
    </ContactUsStyle>
  );
};

export default ContactUs;