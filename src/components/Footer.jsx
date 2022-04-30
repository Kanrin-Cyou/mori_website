import React from 'react';
import {Grid,Box,Button, Typography,Container} from '@mui/material';

export default function Footer(){

return(
    <Box
    sx={{
        width: '100vw',
        backgroundColor: 'primary.main',
    }}
    >
        <Container sx={{pt:5, pb:5}}>
            <Grid container spacing={3}>
                <Grid item sx={12} md={6}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{color:"white",pt:6}}
                    >
                        - アクセス -
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{color:"white"}}
                    >
                        <br/>	
                        〒160-0022
                        <br/>
                        東京都新宿区新宿二丁目12番4号
                        <br/>
                        アコード新宿ビル  301
                        <br/>
                        <br/>
                        営業時間: 平日10:00-18:00
                        <br/>
                        TEL: 03-6457-4917
                        <br/>
                        Email: morishita@gyosei.or.jp
                    </Typography>
                    
                </Grid>

                <Grid item sx={12} md={6} >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{color:"white", pt:5}}
                    >
                    <iframe 
                    title="googlemap" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4467387768045!2d139.7051745158143!3d35.69062268019228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cdcba17a121%3A0x6155b449e6e46e0!2z44CSMTYwLTAwMjIg5p2x5Lqs6YO95paw5a6_5Yy65paw5a6_77yS5LiB55uu77yR77yS4oiS77yUIOOCouOCs-ODvOODieaWsOWuv-ODk-ODqw!5e0!3m2!1sja!2sjp!4v1651136333100!5m2!1sja!2sjp" 
                    width="100%" 
                    height="300px" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0"></iframe>
                    </Typography>
                </Grid>
            </Grid>

            <Typography
                variant="h8"
                component="div"
                sx={{color:"white",pt:5, flexGrow: 1 }}
            >
                Copyright © 2006-{new Date().getFullYear()} 行政書士M&K総合事務所 All rights reserved.
            </Typography>

        </Container>    
    </Box>
    )
}