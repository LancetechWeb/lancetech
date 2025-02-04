import Label from '../../../core/components/Label';
import AutoCompleteComponent from '../../../form-fields/components/AutoCompleteComponent'
import { RoleApplicationFormFields } from '../../types/roles.types'
import { Control } from 'react-hook-form'

const LegalInformation = ({
    control
}:{
      control: Control<RoleApplicationFormFields> | undefined;
}) => {
  return (
    <AutoCompleteComponent <RoleApplicationFormFields>
        control={control}
        data-testid="legalWorkPermit"
        rules={{ required: `legal sponsorship is a required field` }}
        options={["Yes", "No"]}
        name="legalWorkPermit"
        inputProps={{
            label:(<Label title='Do you require legal sponsorship to work at your location?' required/>),                
            sx: {
                '& .MuiOutlinedInput-root': {
                    borderRadius: '5px',
                },
            },
        }}
    />
  )
}

export default LegalInformation