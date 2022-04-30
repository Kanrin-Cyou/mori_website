import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {AppBar,Toolbar,Slide,Grid} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from "react-router-dom";

var Scroll = require('react-scroll');

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

export default function ResponsiveAppBar(){
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (address) => {
    setAnchorElNav(null);
    navigate(address);
  };

  var scroll = Scroll.animateScroll;

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


    return ( 
    
    <HideOnScroll>
        <AppBar elevation={0}>
            <Container p={5}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        行政書士M&K総合事務所
                    </Typography>

                    <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key={'Home'} onClick={()=> handleCloseNavMenu('/mori_website/')}>
                                <Typography textAlign="center">{'Home'}</Typography>
                            </MenuItem>
                            <MenuItem key={'事務所案内'} onClick={()=> handleCloseNavMenu('/mori_website/profile')}>
                                <Typography textAlign="center">{'事務所案内'}</Typography>
                            </MenuItem>
                            <MenuItem key={'主な取払分野'} onClick={()=> handleCloseNavMenu('/mori_website/service')}>
                                <Typography textAlign="center">{'主な取払分野'}</Typography>
                            </MenuItem>
                            <MenuItem key={'アクセス'} onClick={()=> handleCloseNavMenu('/mori_website/access')}>
                                <Typography textAlign="center">{'アクセス'}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>    
                    

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        行政書士 M&K総合事務所
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={'Home'}
                            onClick={()=> navigate('/mori_website/')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button
                            key={'事務所案内'}
                            onClick={()=> navigate('/mori_website/profile')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            事務所案内
                        </Button>
                        <Button
                            key={'主な取払分野'}
                            onClick={()=> navigate('/mori_website/service')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            業務内容
                        </Button>
                        <Button
                            key={'アクセス'}
                            onClick={()=> {scroll.scrollToBottom(100)}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            アクセス
                        </Button>
                    </Box>
                    
                    <Button 
                        color="secondary" 
                        variant="contained"
                        onClick={()=> navigate('/mori_website/contact')}
                        sx = {{color: 'black', display: {xs: 'none', md: 'block' }}}
                        pr={10}
                    >
                        お問い合わせ
                    </Button>

                </Toolbar>
            </Container>

        </AppBar>
    </HideOnScroll>
    )}