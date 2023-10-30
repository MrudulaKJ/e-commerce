// Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#222' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sports Emporium
        </Typography>
        <Button color="inherit">Home</Button>
        <div className="dropdown">
          <Button color="inherit">Shop</Button>
          <div className="dropdown-content">
            <Button color="inherit">Football</Button>
            <Button color="inherit">Basketball</Button>
            <Button color="inherit">Tennis</Button>
            {/* Add more options as needed */}
          </div>
        </div>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
