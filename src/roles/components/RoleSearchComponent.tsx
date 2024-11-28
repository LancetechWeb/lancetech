import { Box, Button, Typography, TextField, InputAdornment } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import { useState, useCallback } from 'react';

const RoleSearchComponent = () => {
  const {roleId} = useParams()
  const navigate = useNavigate()

  const handleBack = () =>{
    navigate('/roles')
  }

  const [searchValue, setSearchValue] = useState('');

  // Define the debounced function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((query: string) => {
      console.log('Search API call with:', query);
      // Add API call or other side-effect logic here
    }, 300),
    []
  );

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchValue(query);
    handleSearch(query);
  };

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