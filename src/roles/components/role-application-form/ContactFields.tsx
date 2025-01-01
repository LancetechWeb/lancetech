import AutoCompleteComponent from '../../../form-fields/components/AutoCompleteComponent'
import TextFieldComponent from '../../../form-fields/components/TextFieldComponent'
import { RoleApplicationFormFields } from '../../types/roles.types'
import { Control } from 'react-hook-form'
import useGetCountries from '../../../form-fields/hooks/useGetCountries'
import TelephoneInputComponent from '../../../form-fields/components/TelephoneInputComponent'
import Label from '../../../core/components/Label'

const ContactFields = (
{
    control
}:{
      control: Control<RoleApplicationFormFields> | undefined;
}) => {
    const {countries} = useGetCountries()

  return (
    <>
         <TextFieldComponent <RoleApplicationFormFields>
            id="email"
            name='email'
            label={<Label title='Email' required/>}
            variant="outlined"
            control={control}
            InputLabelProps={{
                style: { color: 'black' }, // Label color
            }}
            sx={{width:"100%"}} 
            rules={{required:"email is required"}}         
        />
        <TextFieldComponent <RoleApplicationFormFields>
            id="firstName"
            name='firstName'
            label={<Label title='First Name ' required/>}
            variant="outlined"
            control={control}
            InputLabelProps={{
                style: { color: 'black' }, // Label color
            }}
            sx={{width:"100%"}} 
            rules={{required:"First Name is required"}}         
        />
        <TextFieldComponent <RoleApplicationFormFields>
            id="lastName"
            name='lastName'
            label={<Label title='Last Name ' required/>}
            variant="outlined"
            control={control}
            InputLabelProps={{
                style: { color: 'black' }, // Label color
            }}
            sx={{width:"100%"}} 
            rules={{required:"Last Name is required"}}         
        />
        <TelephoneInputComponent <RoleApplicationFormFields>
            name='phoneNumber'
            label={<Label title='Phone Number' required/>}
            variant="outlined"
            control={control}
            InputLabelProps={{
                style: { color: 'black' }, // Label color
            }}
            sx={{width:"100%"}} 
            rules={{required:"Phone Number is required"}}   
        />
        <AutoCompleteComponent <RoleApplicationFormFields>
            control={control}
            data-testid="country"
            rules={{ required: `country is required` }}
            options={countries}
            name="country"
            inputProps={{
                label:(<Label title='Country' required/>),                
                sx: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '5px',
                    },
                },
            }}
        />
        <TextFieldComponent <RoleApplicationFormFields>
            id="outlined-basic"
            name='state'
            label={<Label title='State' required/>}
            variant="outlined"
            control={control}
            InputLabelProps={{
                style: { color: 'black' }, // Label color
            }}
            sx={{width:"100%"}} 
            rules={{required:"State or Region is required"}}         
        />
        <TextFieldComponent <RoleApplicationFormFields>
            id="outlined-basic"
            name='city'
            label={<Label title='City' required/>}
            variant="outlined"
            control={control}
            InputLabelProps={{
                style: { color: 'black' }, // Label color
            }}
            sx={{width:"100%"}} 
            rules={{required:"City is required"}}         
        />
    </>
  )
}

export default ContactFields