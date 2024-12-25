import TextFieldComponent from '../../../form-fields/components/TextFieldComponent';
import { Control, useFieldArray } from 'react-hook-form';
import { Button, Icon, IconButton, List, ListItem, Tooltip } from '@mui/material';
import { COLORS } from '../../../core/styles/COLORS';
import { isValidURL } from '../../../utils/string.helpers';
import { RoleApplicationFormFields } from '../../types/roles.types';
import { nanoid } from 'nanoid';

const PortfolioFields = ({
  control
}: {
  control: Control<RoleApplicationFormFields>;
}) => {

  // useFieldArray to manage dynamic fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'portfolioLinks', // Array of portfolio links
  });

  const handleDelete = (fieldIndex: number): void => remove(fieldIndex);

  const handleAddLink = () => append({ id: nanoid(), url: '' });

  return (
    <List>
      {
        fields.map((field, index) => (
          <ListItem key={field.id}>
            <TextFieldComponent<RoleApplicationFormFields>
              name={`portfolioLinks.${index}.url`}  // Use the correct name format
              label={`Link ${index + 1}`}
              variant="outlined"
              control={control}
              InputLabelProps={{
                style: { color: 'black' }, // Label color
              }}
              sx={{
                width: "100%", 
                ...(index === 0 && {mr: 7}) // Add margin to the first field
              }} 
              rules={{
                validate: (value) => {
                  if (typeof value !== 'string') return true
              
                  if (!value) return true

                  return isValidURL(value) ? true : 'Please enter a valid URL';
                }
              }}         
            />
            {index !== 0 && (
              <Tooltip title='delete'>
                <IconButton sx={{ ml: 2, color: COLORS.LightBlue }} onClick={() => handleDelete(index)}>
                  <Icon>highlight_off</Icon>
                </IconButton>
              </Tooltip>
            )}
          </ListItem>
        ))
      }
      <Button variant='outlined' sx={{ ml: 2 }} onClick={handleAddLink}>Add Link</Button>
    </List>
  );
}

export default PortfolioFields;
