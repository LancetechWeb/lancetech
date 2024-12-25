import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { Controller, FieldValues } from 'react-hook-form'
import { TelephoneInputComponentProps } from '../types/form-fields.types'
import { Typography } from '@mui/material';

const TelephoneInputComponent = <T extends FieldValues>  (props:TelephoneInputComponentProps<T >) => {
    const { name, control, rules, onChange, ...rest } = props;


  return (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
            <MuiTelInput 
                {...field}
                {...rest}
                fullWidth
                variant="outlined"
                defaultCountry={'US'}
                id="phoneNumber"
                name="phoneNumber"
                sx={{width:"100%"}}
                onChange={(val, info) => {
                    onChange && onChange(val, info);
                    matchIsValidTel(val)
                    // onChange for validation
                    field.onChange(val);
                  }}
                error={!!error}
                helperText={
                error?.message && (
                  <Typography variant="body2">{error.message}</Typography>
                )
              }
            />
        )}
  />

  )
}

export default TelephoneInputComponent