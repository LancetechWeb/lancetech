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
  UseFormReturn,
} from 'react-hook-form';
import { FileType } from './fileUpload.types';
import { MuiTelInputProps } from 'mui-tel-input';

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

// AutocompleteComponent prop type
export interface AutoCompleteComponentProps<T extends FieldValues>
  extends FieldValidationProps<T> {
  disabled?: boolean;
  onChange?: (newVal: string | null) => void;
  options: string[];
  inputProps: TextFieldProps;
}

// TelephoneInput prop type
export type TelephoneInputComponentProps<T extends FieldValues> =
   FieldValidationProps<T> & MuiTelInputProps  

export interface FileUploadProps<T extends FieldValues> 
  extends FieldValidationProps<T> {
  multiple?: boolean; // Determines if multiple files can be uploaded
  allowedFileTypes:FileType[]
  setValue:(name:Path<T>, value: File[]|undefined)=>void
  trigger: UseFormReturn<T>['trigger']
}