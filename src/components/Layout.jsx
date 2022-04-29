import React from 'react';
import ResponsiveAppBar from './Appbar';
import Footer from './Footer';

export default function Layout({children}){

    return (
        <div> 
            <ResponsiveAppBar/>
            {children}
            <Footer/>
        </div>
    )
}