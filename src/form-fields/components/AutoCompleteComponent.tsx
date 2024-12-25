import { Autocomplete, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { AutoCompleteComponentProps } from '../types/form-fields.types';
import type { FieldValues } from 'react-hook-form';

const AutoCompleteField = <T extends FieldValues>(
  props: AutoCompleteComponentProps<T>,
) => {
  const { name, control, rules, onChange, options, inputProps, ...rest } =
    props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          {...rest}
          multiple={false}
          options={options ?? []}
          getOptionLabel={(option) => option || ''}
          onChange={(
            event: React.SyntheticEvent<Element, Event>,
            newValue: string | null,
          ) => {
            field.onChange(newValue);
            onChange && onChange(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              {...inputProps}
              error={!!error}
              helperText={
                error?.message && (
                  <Typography variant="body2">{error.message}</Typography>
                )
              }
            />
          )}
          isOptionEqualToValue={(option, val) => option === val}
        />
      )}
    />
  );
};

export default AutoCompleteField;
