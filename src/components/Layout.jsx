import React from 'react';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Appbar';
import Footer from './Footer';

export default function Layout({children}){

    return (
        <Box sx={{  overflow:"hidden"}}> 
            <ResponsiveAppBar sx={{overflow: "hidden"}}/>
            {children}
            <Footer/>
        </Box>
    )
}