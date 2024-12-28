import { Box, Button, Divider, Typography, useMediaQuery } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Role, RoleApplicationFormFields } from '../../types/roles.types';
import FileUpload from '../../../form-fields/components/FileUploadComponent';
import { FileType } from '../../../form-fields/types/fileUpload.types';
import { useForm } from 'react-hook-form';
import ContactFields from './ContactFields';
import PortfolioFields from './PortfolioFields';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setHasFooter, setNavbarColor } from '../../../core/reducers/uiSlice';
import { COLORS } from '../../../core/styles/COLORS';
import { Step, Stepper, StepProvider } from '../../../utils/stepper';

export const roleFormSteps = [
    {id:"resume", name:"Resume"}, 
    {id:"contactInformation", name:"Contact Information"}, 
    {id:"additionalDocuments", name:"Additional Documents"}

]

const RoleApplicationForm = ({role}:{role:Role}) => {
    // variables
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setHasFooter(false));
        dispatch(setNavbarColor(COLORS.DarkBlue));

        return ()=>{
            dispatch(setHasFooter(true));
            dispatch(setNavbarColor(undefined));
        }
    }, [dispatch])

    const resumeFileTypes = [FileType.PDF, FileType.DOC, FileType.DOCX, FileType.DOCX]
    const additionalDocumentsFileTypes = Object.values(FileType)

    const {control, handleSubmit, setValue, getValues, trigger} = useForm<RoleApplicationFormFields>({
        defaultValues: {
            portfolioLinks: [{id:"firstLink", url:''}],
          },
    })
     const isMobile = useMediaQuery("(max-width:800px)")
     
    const handleSubmitForm = (formValues:RoleApplicationFormFields) =>{
        console.log('formValues', formValues);
        console.log('formValues getValues', getValues());
    }

  return (
    <StepProvider>
        <Box sx={{display:"flex", gap:25, alignItems:"center", justifyContent:"center", }} >
            {/** stepper */}
            {!isMobile &&  <Box sx={{alignSelf:"flex-start"}}>
                <Stepper steps={roleFormSteps} />
            </Box>}

            <Box>
                <Typography variant='h5' sx={{}}>Application for</Typography>
                <Box 
                    component="form" 
                    onSubmit={handleSubmit(handleSubmitForm)} 
                    sx={{
                        display:"flex", 
                        flexDirection:"column", 
                        gap:5,
                    }}
                >
                    {/** header */}
                    <Box
                        sx={{display:"flex", gap:2, alignItems:"center", border:"1px solid", borderRadius:"5px", p:2}}>
                        <BusinessCenterIcon/>
                        <Box>
                            <Typography variant='h6'>{role.title}</Typography>
                            <Typography>{role.remote}</Typography>
                        </Box>
                    </Box>
                
                    {/** resume */}
                    <Step id="resume">
                        <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px", border:"1px solid", p:2}}>
                            <Typography variant='h6'>Resume</Typography>
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
                    </Step>
                    
                    {/** contact information */}
                    <Step id="contactInformation">
                        <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px", border:"1px solid", p:2, }} >
                            <Typography variant='h6'>Contact Information</Typography>
                            <Divider/>
                            <ContactFields control={control}/>
                        </Box>
                    </Step>

                    {/** additional documents and link */}
                    <Step id="additionalDocuments">
                        <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px", border:"1px solid", p:2}}>
                            <Typography variant='h6'>Additional Documents</Typography>
                            <Divider/>
                            <Typography>If applicable, please provide relevant work samples (e.g. art portfolios, design portfolios, etc.)</Typography>
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
                    </Step>

                    {/** submit form button */}
                    <Box 
                        sx={{
                            alignItems:"center",
                            display:"flex",
                            justifyContent:"space-between",                    
                            position:"fixed", 
                            py:2,
                            bottom:0, 
                            left:0, 
                            right:0, 
                            background:'white',
                            borderTop:"1px solid",
                            zIndex:10
                        }}
                    >
                        <Button variant="outlined" type='submit' sx={{ mt:5, py:2, my:"auto" }}>
                            cancel
                        </Button>
                        <Button variant="contained" type='submit' sx={{ mt:5, py:2, my:"auto" }}>
                            Login
                        </Button>
                    </Box>
                </Box>

                
            </Box>
        </Box>
    </StepProvider>
  )
}

export default RoleApplicationForm
