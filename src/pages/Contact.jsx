import React from 'react';
import {Grid,Box,Button, Typography,Container} from '@mui/material';

export default function Contact(){

    return(
        <Box 
        sx={{
            pt:10,
            width: '100vw',
            backgroundColor: 'white',
        }}
        >
            <Container sx={{pt:8, pb:8}}>

                <Typography align="center" variant="h3">
                    お問い合わせ
                </Typography>

                <Typography sx={{pt:5, pb:8, color:"text.secondary"}} align="center" variant="h5" >
                    We Are Committed To Delivering Top Quality Legal Service.
                </Typography>
            </Container>
        </Box>
    )
}