import React from 'react';
import { Card,CardHeader,CardContent, Typography } from '@mui/material';

export default function learningCard({items}){
    return(
        <div>
            <Card elevation={0}>
                <CardHeader 
                    avatar={items.icon}
                />
                <CardContent>
                    <Typography variant='h5' pb={3}>
                        {items.title}
                    </Typography>
                    <Typography variant='body2'>
                        {items.content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
