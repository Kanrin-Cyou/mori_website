import React from 'react';
import { Card,CardHeader,CardContent,IconButton, Typography, Avatar } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

const colorSelector = (note) => {
    if (note === 'reminders'){return "#fbc02d"}
    else if (note === 'work'){return "#9c27b0"}
    else if (note === 'todos'){return "#f44336"}
    else {return "#2196f3"}
}

export default function NoteCard({note,handleDelete}){
    return(
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{background:colorSelector(note.category)}}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={()=> handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2' color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
