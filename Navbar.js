import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" onClick={handleMenu}>Menu</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/campaign-creation" onClick={handleClose}>Campaign Creation</MenuItem>
          <MenuItem component={Link} to="/analytics" onClick={handleClose}>Analytics</MenuItem>
          <MenuItem component={Link} to="/settings" onClick={handleClose}>Settings</MenuItem>
          <MenuItem component={Link} to="/research" onClick={handleClose}>Research</MenuItem>
          {/* Add more menu items as needed */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;