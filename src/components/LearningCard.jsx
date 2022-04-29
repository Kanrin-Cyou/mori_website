import React from 'react';
import { Card,CardHeader,Box, CardContent,CardActions,Button, Typography} from '@mui/material';

export default function learningCard({items}){
    return(
        <Card 
            elevation={1} 
            style={{height:"100%"}}
        >
            <CardContent>
                <CardHeader 
                    avatar={items.icon}
                />
                <Typography variant='h5' pl={2} pb={2}>
                    {items.title}
                </Typography>
                <Typography variant='body2' pl={2}>
                    {items.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    sx = {{ml:2,mb:3}}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}
