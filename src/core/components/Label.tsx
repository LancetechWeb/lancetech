import React from 'react'

const Label = ({title, required}:{title:string; required?:boolean}) => {
  return (
    <>{title} {required && <span style={{ color: 'red' }}>*</span>} </> 
  )
}

export default Label