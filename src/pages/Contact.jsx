import React from 'react';
import {Box} from '@mui/material';

export default function Contact(){

    return(
        <Box
            sx={{
                pt:8,
                width: '100vw',
                height: '1700px',
                backgroundColor: 'primary.main',
            }}
        >
            <iframe src="https://tayori.com/f/mktoiawase/" 
                    title="tayoriQuestion"
                    frameborder="0"
                    width="100%"
                    height="100%"
                    marginheight="0"
                    marginwidth="0"
                    scrolling="no"
            >
            </iframe>
        </Box>
    )
}

{/* <Box style="width:100%;height:600px;overflow:auto;-webkit-overflow-scrolling:touch;">
</Box> */}