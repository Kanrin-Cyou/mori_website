import React from 'react';
import { Card,CardHeader,CardContent, Typography } from '@mui/material';

export default function learningCard({items}){
    return(
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        items.icon
                    }
                    title={items.title}
                />
                <CardContent>
                    <Typography variant='body2' color="textSecondary">
                        {items.content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
