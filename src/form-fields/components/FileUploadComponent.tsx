import  { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { Box, Button, Typography, List, ListItem, ListItemText, Alert, Icon, IconButton, Tooltip } from '@mui/material';
import { buildFileMapFromFileArray } from '../helpers/form-fields.helpers';
import { FileUploadProps } from '../types/form-fields.types';
import { COLORS } from '../../core/styles/COLORS';
import { generateAcceptObject } from '../types/fileUpload.types';
import { Controller, FieldValues } from 'react-hook-form';
import { isEmpty, omit } from 'lodash';

const FileUpload=<T extends FieldValues>({ multiple, allowedFileTypes, name, control, rules, setValue, trigger  }:FileUploadProps<T>) => {
  const [files, setFiles] = useState<Record<string, File>>({});
  const [notSupportedError, setNotSupportedError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      // Clear any previous errors
      setNotSupportedError(null);

      if (fileRejections.length > 0) {
        setNotSupportedError('Some files are not supported. Please upload PDF, DOC, DOCX, or TXT files.');
        return;
      }      

      setFiles(buildFileMapFromFileArray(acceptedFiles, files, multiple));

      setValue(name, buildFileMapFromFileArray(acceptedFiles, files, multiple))
      
      trigger(name); // Trigger validation after setting the value
    },
    [files, multiple, name, setValue, trigger]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateAcceptObject(allowedFileTypes),
    multiple, // Controls whether multiple files are accepted
  });

  const handleDelete = (fileName:string) => {
    const updatedFiles = omit(files, fileName)
    console.log("updatedFiles", updatedFiles)
    setFiles(updatedFiles);
    isEmpty(updatedFiles) && setValue(name, undefined); // Update the form state when deleting a file
    !isEmpty(updatedFiles) && setValue(name, updatedFiles); // Update the form state when deleting a file
    trigger(name); // Trigger validation after deleting a file
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
      <Box 
        {...field}
        sx={{  }}
      >
        <Box
          {...getRootProps()}
          sx={{
            display:"flex",
            justifyContent:"space-between",
            border: error ? '2px dashed red' : '2px dashed',
            borderRadius: "5px",
            padding: 2,
            cursor: 'pointer',
            backgroundColor: 'background.paper',
            transition: 'background-color 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <input {...getInputProps()}/>
          <Box sx={{display:"flex"}}>
            <Icon sx={{fontSize:"48px", color:`${COLORS.MainBlue}`}}>upload_file</Icon>
            <Typography color="textSecondary">
              Drag & drop file <br/>
              {allowedFileTypes.join(", ")}
            </Typography>
          </Box>
          <Button variant="contained" component="span" sx={{background:"black"}}>
            Select Files
          </Button>
        </Box>
        {notSupportedError && (
          <Alert severity="error" sx={{ mt: 2 }} onClose={()=> setNotSupportedError(null)}>
            {notSupportedError}
          </Alert>
        )}
        {Object.values(files).length > 0 && (
          <Box mt={2}>
            <Typography variant="h6">Uploaded Files:</Typography>
            <List>
              {Object.values(files).map((file, index) => (
                <ListItem key={index}>
                  <ListItemText primary={file.name} />
                  <Tooltip title='delete'>
                    <IconButton onClick={()=>handleDelete(file.name)}><Icon>delete</Icon></IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {error?.message && (
            <Typography variant="body2" color='error'>{error.message}</Typography>
        )}
      </Box>
    )}
    />
  );
};

export default FileUpload;