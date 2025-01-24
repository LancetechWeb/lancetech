import { SxProps, Typography } from '@mui/material';
import React from 'react'

const Label = ({title, sx, required}:{title:string; sx?:SxProps; required?:boolean}) => {
  return (
    <Typography sx={sx}>{title} {required && <span style={{ color: 'red' }}>*</span>} </Typography> 
  )
}

export default Label