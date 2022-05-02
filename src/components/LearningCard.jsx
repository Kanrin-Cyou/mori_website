import React from 'react';
import { Card,CardHeader, CardContent,CardActions,Button, Typography} from '@mui/material';

export default function learningCard({items,nav}){

    return(
        <Card 
            elevation={1} 
            style={{height:"100%"}}
            data-aos="fade-up"
            data-aos-duration="700"
        >
            <CardContent>
                <CardHeader 
                    avatar={items.icon}
                />
                <Typography variant='h5'  pb={2}>
                    {items.title}
                </Typography>
                <Typography variant='body2' >
                    {items.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    sx = {{mb:3}}
                    onClick={()=> {nav('/mori_website/service')}}
                >
                    詳細
                </Button>
            </CardActions>
        </Card>
    )
}
