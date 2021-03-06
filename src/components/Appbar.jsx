import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {AppBar,Toolbar,Slide} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import {useNavigate } from "react-router-dom";

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

  const handleNav = (address) => {
    scroll.scrollToTop();
    navigate(address);
  };

  const handleCloseNavMenu = (address) => {
    setAnchorElNav(null);
    scroll.scrollToTop();
    navigate(address);
  };

  const handleCloseNavMenus2 = () => {
    setAnchorElNav(null);
    scroll.scrollToBottom(100)
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
        <AppBar elevation={0} sx={{maxWidth:"100%"}}>
            <Container p={5}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        ????????????M&K???????????????
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
                            <MenuItem key={'???????????????'} onClick={()=> handleCloseNavMenu('/mori_website/profile')}>
                                <Typography textAlign="center">{'???????????????'}</Typography>
                            </MenuItem>
                            <MenuItem key={'??????????????????'} onClick={()=> handleCloseNavMenu('/mori_website/service')}>
                                <Typography textAlign="center">{'??????????????????'}</Typography>
                            </MenuItem>
                            <MenuItem key={'????????????'} onClick={()=>handleCloseNavMenus2()}>
                                <Typography textAlign="center">{'????????????'}</Typography>
                            </MenuItem>
                            <MenuItem key={'??????????????????'} onClick={()=>handleCloseNavMenu('/mori_website/contact')}>
                                <Typography textAlign="center">{'??????????????????'}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>    
                    

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        ???????????? M&K???????????????
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={'Home'}
                            onClick={()=> handleNav('/mori_website/')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button
                            key={'???????????????'}
                            onClick={()=> handleNav('/mori_website/profile')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            ???????????????
                        </Button>
                        <Button
                            key={'??????????????????'}
                            onClick={()=> handleNav('/mori_website/service')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            ??????????????????
                        </Button>
                        <Button
                            key={'????????????'}
                            onClick={()=> {scroll.scrollToBottom(100)}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            ????????????
                        </Button>
                    </Box>
                    
                    <Button 
                        color="secondary" 
                        variant="contained"
                        onClick={()=> navigate('/mori_website/contact')}
                        sx = {{color: 'black', display: {xs: 'none', md: 'block' }}}
                        pr={10}
                    >
                        ??????????????????
                    </Button>

                </Toolbar>
            </Container>

        </AppBar>
    </HideOnScroll>
    )}