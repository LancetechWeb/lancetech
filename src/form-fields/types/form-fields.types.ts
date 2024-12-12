import type { TextFieldProps } from '@mui/material';
import type {
  DateRange,
  MultiInputTimeRangeFieldProps,
} from '@mui/x-date-pickers-pro';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

/**
 * A generic type for React Hook Form rules.
 *
 * @template T - The form's type (extends FieldValues).
 * @template K - The key of the field being validated (extends Path<T>).
 */
export type GenericReactHookFormRule<
  T extends FieldValues,
  K extends Path<T>,
> = RegisterOptions<T, K>;

// shared form field props
export interface FieldValidationProps<T extends FieldValues> {
  control: Control<T> | undefined;
  rules: GenericReactHookFormRule<T, Path<T>>;
  name: Path<T>;
}

// TextFieldComponentProps prop type
export interface TextFieldComponentProps<T extends FieldValues>
  extends FieldValidationProps<T>,
    Omit<TextFieldProps, 'onChange' | 'name'> {
  onChange?: (newVal: string) => void;
}

// TimeRange prop type
export interface TimeRangeComponentProps<T extends FieldValues>
  extends FieldValidationProps<T>,
    Omit<MultiInputTimeRangeFieldProps<Date>, 'onChange' | 'name'> {
  onChange: (newTimeRange: DateRange<Date>) => void;
  inputProps: TextFieldProps;
}