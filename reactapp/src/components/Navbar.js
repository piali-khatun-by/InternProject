import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { red } from '@mui/material/colors';
const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor :'hwb(253 2% 55%)'}}>
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Kafka Monitor</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'hwb(211 18% 6%)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? 'hwb(211 18% 6%)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'hwb(211 18% 6%)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
