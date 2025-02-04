import { Box, Button, Typography, TextField, InputAdornment } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import { useState, useCallback } from 'react';
import useGetRoles from '../hooks/useGetRoles';

const RoleSearchComponent = () => {
  const {roleId} = useParams()
  const navigate = useNavigate()

  // local state
  const [searchString, setSearchString] = useState<string>('')

  const handleBack = () =>{
    navigate('/roles')
  }

  const [searchValue, setSearchValue] = useState('');

  // Define the debounced function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((searchValue: string) => {
      setSearchString(searchValue)
    }, 500),
    []
  );

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
    handleSearch(searchValue);
  };

  useGetRoles(searchString)

  return (
    <Box 
        sx={{ 
            display: 'flex', 
           ...(!roleId && {justifyContent: "end"}), 
            maxWidth:"1920px", 
            mx:"auto", 
            px:2, 
            my:2
        }}
    >
        {roleId && 
          <Button onClick={handleBack} sx={{color:"black", textTransform:"none"}}>
            <ArrowBackIosIcon sx={{fontSize:"16px"}}/>
            <Typography variant="body1">Back to roles</Typography>
          </Button>
        }
        {!roleId && 
          <TextField
            value={searchValue}
            variant="outlined"
            placeholder="Search"
            onChange={handleChange}
            slotProps={{
              input:{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }
            }}
            sx={{width:"300px"}}
          />
        }
    </Box>
  )
}

export default RoleSearchComponent