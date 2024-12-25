import { Box, Button, Divider, Typography } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Role, RoleApplicationFormFields } from '../../types/roles.types';
import FileUpload from '../../../form-fields/components/FileUploadComponent';
import { FileType } from '../../../form-fields/types/fileUpload.types';
import { useForm } from 'react-hook-form';
import ContactFields from './ContactFields';
import PortfolioFields from './PortfolioFields';

const RoleApplicationForm = ({role}:{role:Role}) => {
    const resumeFileTypes = [FileType.PDF, FileType.DOC, FileType.DOCX, FileType.DOCX]
    const additionalDocumentsFileTypes = Object.values(FileType)

    const {control, handleSubmit, setValue, getValues, trigger} = useForm<RoleApplicationFormFields>({
        defaultValues: {
            portfolioLinks: [{id:"firstLink", url:''}],
          },
    })

    const handleSubmitForm = (formValues:RoleApplicationFormFields) =>{
        console.log('formValues', formValues);
        console.log('formValues getValues', getValues());
    }

  return (
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", maxWidth:"1920px", mx:"auto"}}>
        {/** stepper */}
        <Box></Box>

        <Box>
            <Typography variant='body2'>Application for</Typography>
            <Box component="form" onSubmit={handleSubmit(handleSubmitForm)} sx={{display:"flex", flexDirection:"column", gap:5}}>
                {/** header */}
                <Box sx={{display:"flex", gap:2, alignItems:"center", border:"1px solid", borderRadius:"5px", p:2}}>
                    <BusinessCenterIcon/>
                    <Box>
                        <Typography>{role.title}</Typography>
                        <Typography>{role.remote}</Typography>
                    </Box>
                </Box>
            
                {/** resume */}
                <Box sx={{borderRadius:"5px", border:"1px solid", p:2}}>
                    <Typography variant='body2'>Resume</Typography>
                    <Divider/>
                    <Typography>Upload your resume/CV</Typography>
                    <FileUpload <RoleApplicationFormFields>
                        allowedFileTypes={resumeFileTypes}
                        control={control} 
                        rules={{required:"please upload a document"}} 
                        name="resume"
                        setValue={setValue}
                        trigger={trigger}
                    />
                </Box>
                
                {/** contact information */}
                <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px", border:"1px solid", p:2, }}>
                    <Typography variant='body2'>Contact Information</Typography>
                    <Divider/>
                    <ContactFields control={control}/>
                </Box>
            
                {/** additional documents and link */}
                <Box sx={{borderRadius:"5px", border:"1px solid", p:2}}>
                    <Typography variant='body2'>Additional Documents</Typography>
                    <Divider/>
                    <FileUpload <RoleApplicationFormFields>
                        allowedFileTypes={additionalDocumentsFileTypes} 
                        multiple 
                        control={control} 
                        rules={{}} 
                        name="additionalDocuments"
                        setValue={setValue}
                        trigger={trigger}
                    />
                    <PortfolioFields control={control}/>
                </Box>

                {/** submit form button */}
                <Button variant="contained" type='submit' sx={{width:"100%", mt:5, py:2}}>
                    Login
                </Button>
            </Box>

            
        </Box>
    </Box>
  )
}

export default RoleApplicationForm
