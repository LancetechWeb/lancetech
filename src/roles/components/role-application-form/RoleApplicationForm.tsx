import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Role, RoleApplicationFormFields, roleFormSteps } from '../../types/roles.types';
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
import { axiosWrapper } from '../../../utils/auth/axiosInstance';
import { setSnackbar } from '../../../core/reducers/coreSlice';
import LegalInformation from './LegalInformation';
import { convertMapToFormData } from '../../../utils/object';
import RoleApplicationActions from './RoleApplicationActions';

const RoleApplicationForm = ({role}:{role:Role}) => {
    // variables
    const dispatch = useDispatch();
    const isMobile = useMediaQuery("(max-width:800px)");
    const resumeFileTypes = [FileType.PDF, FileType.DOC, FileType.DOCX, FileType.DOCX]
    const additionalDocumentsFileTypes = Object.values(FileType)

    // hooks
    useEffect(()=>{
        dispatch(setHasFooter(false));
        dispatch(setNavbarColor(COLORS.DarkBlue));

        return ()=>{
            dispatch(setHasFooter(true));
            dispatch(setNavbarColor(undefined));
        }
    }, [dispatch])

    const {control, handleSubmit, setValue, trigger} = useForm<RoleApplicationFormFields>({
        defaultValues: {
            portfolioLinks: [{id:"firstLink", url:''}],
          },
    })
     
    // functions
    const handleSubmitForm = async (formValues:RoleApplicationFormFields) =>{
        const formData = convertMapToFormData(formValues);

        // add role to payload
        formData.append("roleId", role._id)
      
        const {data, error} = await axiosWrapper({method:'POST', url:`/roles/apply/${role._id}`, data:formData});

        if(data) dispatch(setSnackbar({type:"success", message:"Application sent successfully"}))    
        if(error) dispatch(setSnackbar({type:"error", message:`oops! there was an error: ${error.message}`}))      
    }

  return (
    <StepProvider>
        <Box sx={{display:"flex", gap:25, alignItems:"center", justifyContent:"center", ...(isMobile && {px:1})}} >
            {/** stepper */}
            {!isMobile &&  
                <Box sx={{alignSelf:"flex-start"}}>
                    <Stepper steps={roleFormSteps} />
                </Box>
            }

            <Box>
                <Typography sx={{fontSize:"24px", fontWeight:600, mb:2}}>Application for</Typography>
                <Box component="form" onSubmit={handleSubmit(handleSubmitForm)} sx={{display:"flex", flexDirection:"column", gap:5}}>
                    {/** header */}
                    <Box
                        sx={{display:"flex", gap:2, alignItems:"center", border:`1px solid ${COLORS.LightGrey}`, borderRadius:"5px", p:2}}>
                        <BusinessCenterIcon sx={{p:2, borderRadius:"50%", background:COLORS.FadedWhite}}/>
                        <Box>
                            <Typography sx={{fontSize:"20px", fontWeight:550}}>{role.title}</Typography>
                            <Typography sx={{color:COLORS.LightFont}}>{role.remote}</Typography>
                        </Box>
                    </Box>
                
                    {/** resume */}
                    <Step id="resume">
                        <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px", border:`1px solid ${COLORS.LightGrey}`, p:2}}>
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
                        <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px", border:`1px solid ${COLORS.LightGrey}`, p:2, }} >
                            <Typography variant='h6'>Contact Information</Typography>
                            <Divider/>
                            <ContactFields control={control}/>
                        </Box>
                    </Step>

                    {/** additional documents and link */}
                    <Step id="additionalDocuments">
                        <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px",  border:`1px solid ${COLORS.LightGrey}`, p:2}}>
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
                            <Divider sx={{mt:2}}/>
                            <Typography sx={{mt:2}}>If applicable, please provide relevant links (LinkedIn, Github, Portfolio etc.):</Typography>
                            <PortfolioFields control={control}/>
                        </Box>
                    </Step>

                      {/** legal information */}
                      <Step id="legalInformation">
                        <Box sx={{display:"flex", flexDirection:"column", gap:2, borderRadius:"5px", border:`1px solid ${COLORS.LightGrey}`, p:2, }} >
                            <Typography variant='h6'>Legal Information</Typography>
                            <Divider/>
                            <LegalInformation control={control}/>
                        </Box>
                    </Step>

                    {/** form actions (submit and cancel buttons) */}
                    <RoleApplicationActions role={role}/>
                </Box>
            </Box>
        </Box>
    </StepProvider>
  )
}

export default RoleApplicationForm