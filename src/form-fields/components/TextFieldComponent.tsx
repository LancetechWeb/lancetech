import { TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { TextFieldComponentProps } from '../types/form-fields.types';

const TextFieldComponent = <T extends FieldValues>(
  props: TextFieldComponentProps<T>,
) => {
  const { name, control, rules, onChange, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          onChange={(e) => {
            onChange && onChange(e.target.value);

            // onChange for validation
            field.onChange(e.target.value);
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
  );
};

export default TextFieldComponent;