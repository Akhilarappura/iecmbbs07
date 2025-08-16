
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Image from 'next/image';

const drawerWidth = 280;
const navItems = [
  'Study Destinations',
  'Services', 
  'Upcoming Events',
  'Contact Us',
  'Company'
];

const dropdownItems = ['Study Destinations', 'Services', 'Company'];

function DrawerAppBar(props) {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: theme.palette.primary.main }}>
      <Typography
        variant="h5"
        sx={{
          my: 3,
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
 IEC MBBS
        <Typography 
          component="span" 
          sx={{ 
            display: 'block', 
            fontSize: '0.75rem', 
            fontWeight: 400,
            letterSpacing: '0.1em',
            mt: 0.5
          }}
        >
          education
        </Typography>
      </Typography>
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'left',
                py: 1.5,
                px: 3,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{ 
                  color: 'white',
                  '& .MuiListItemText-primary': {
                    fontSize: '1rem',
                    fontWeight: 500
                  }
                }}
              />
              {dropdownItems.includes(item) && (
                <KeyboardArrowDownIcon sx={{ color: 'white', fontSize: 18 }} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
        
        {/* Mobile Action Buttons */}
        <Box sx={{ px: 2, mt: 2, space: 2 }}>
         
          <Button
            fullWidth
            variant="contained"
            startIcon={<VideoCallIcon />}
            sx={{
                 bgcolor: theme.palette.primary.main,
              color: 'white',
              py: 1.2,
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              borderRadius: 2,
              '&:hover': {
                bgcolor: '#E55A2B'
              }
            }}
          >
            Book Online Counselling
          </Button>
        </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'theme.palette.primary.main', 
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Logo */}
          <Typography
            variant="h5"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'bold',
              fontSize: { sm: '1.3rem', md: '1.5rem' },
              lineHeight: 1.2
            }}
          >
      IEC MBBS
            <Typography 
              component="span" 
              sx={{ 
                display: 'block', 
                fontSize: { sm: '0.65rem', md: '0.75rem' }, 
                fontWeight: 400,
                letterSpacing: '0.1em',
                mt: -0.5
              }}
            >
              education
            </Typography>
          </Typography>

          {/* Mobile Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'block', sm: 'none' },
              fontWeight: 'bold',
              fontSize: '1.1rem',
              lineHeight: 1.2
            }}
          >
  IEC MBBS 
            <Typography 
              component="span" 
              sx={{ 
                display: 'block', 
                fontSize: '0.6rem', 
                fontWeight: 400,
                letterSpacing: '0.1em',
                mt: -0.5
              }}
            >
              education
            </Typography>
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => (
              <Button 
                key={item} 
                sx={{ 
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 1
                  }
                }}
                endIcon={
                  dropdownItems.includes(item) ? 
                  <KeyboardArrowDownIcon sx={{ fontSize: 18 }} /> : 
                  null
                }
              >
                {item}
              </Button>
            ))}
            
            {/* Action Buttons */}
           
            
            <Button
              variant="contained"
              startIcon={<VideoCallIcon />}
              sx={{
                bgcolor: '#FF6B35',
                color: 'white',
                ml: 1.5,
                px: 2.5,
                py: 1,
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(255,107,53,0.3)',
                '&:hover': {
                  bgcolor: '#E55A2B',
                  boxShadow: '0 4px 12px rgba(255,107,53,0.4)'
                }
              }}
            >
              Book Online Counselling
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              bgcolor: '#4A90E2'
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Main content */}
      <Box component="main" sx={{ p: 0, m: 0 }}>
        <Toolbar /> {/* Spacer for fixed AppBar */}
        {props.children}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

export default DrawerAppBar;