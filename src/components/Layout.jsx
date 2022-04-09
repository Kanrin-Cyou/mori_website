import React from 'react';
import ResponsiveAppBar from './Appbar';

export default function Layout({children}){

    return (
        <div> 
            <ResponsiveAppBar/>
            {children}
        </div>
    )
}