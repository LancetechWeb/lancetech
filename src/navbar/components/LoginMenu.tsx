import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import {  Button } from '@mui/material';
import { COLORS } from '../../core/styles/COLORS';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../core/selectors/core.selectors';
import { useNavigate } from 'react-router-dom';

const LoginMenu = () => {
    const navigate = useNavigate()

     // selectors
    const isAuthenticated = useSelector(selectIsAuthenticated)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if(isAuthenticated) setAnchorEl(event.currentTarget);
    if(!isAuthenticated)navigate("/admin")
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Login">
            <Button
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                sx={{border:`1px solid ${COLORS.MainBlue}`}}
            >
                <Avatar sx={{ width: 32, height: 32, mr:1, background:COLORS.MainBlue }}/>
                <Typography sx={{
                    textTransform:"none",
                    color:COLORS.LightBlue
                }}>Login</Typography>
            </Button>
        </Tooltip>

      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              width:180,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        disableScrollLock
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}


export default LoginMenu