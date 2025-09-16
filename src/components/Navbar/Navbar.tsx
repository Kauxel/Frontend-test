import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from '../Button/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="sticky" sx={{ width: '100%', left: 0, right: 0, top: 0, backgroundImage: 'linear-gradient(45deg, #18A2BA, #296377)' }}>
      <Toolbar disableGutters className="w-[100%] flex justify-center">
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="open sidebar"
            onClick={toggleSidebar}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', paddingLeft: { xs: 1, md: 3 }, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <a href="/">
            <img src={logo} alt="Logo" />
            <Typography sx={{ paddingLeft: 1, display: { xs: 'none', md: 'flex' }, }}>iMeeting</Typography>
          </a>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gridGap: 4, paddingRight: 3 }}>
          <IconButton size="large" color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }}>
            <CampaignIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant='text'
              leftIcon={<CampaignIcon />}
              title='Kontak Aduan'
              sx={{
                paddingX: 2,
                textTransform: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'inherit',
              }}
            />
          </Box>
          <IconButton
            size="large"
            color="inherit"
          >
            <NotificationsNoneIcon />
          </IconButton>
          <Button
            variant='text'
            onClick={handleProfileMenuOpen}
            leftIcon={<AccountCircle />}
            title='Jhon Doe'
            rightIcon={
              isMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            sx={{
              textTransform: 'none',
              backgroundColor: 'transparent',
              color: 'inherit',
            }}
          />
        </Box>
        {renderMenu}
      </Toolbar>


    </AppBar>

  );
};

export default Navbar;
