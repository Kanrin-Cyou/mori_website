import React from 'react';
import {Grid,Box,Paper, Typography,Container} from '@mui/material';
import HeroImage from "../asset/Hero.jpeg";
import LearningCard from '../components/LearningCard'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

export default function Home(){

    const serviceTypes = [
        {
            title:'契約書作成',
            icon: <PersonSearchIcon color="primary"/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'利用規約作成',
            icon: <OndemandVideoIcon color="primary"/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'補助金·給付金申請',
            icon: <MenuBookIcon color="primary"/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'その他',
            icon: <CardMembershipIcon color="primary"/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
    ]

    return(
        <Box>
            <Paper sx={{height:'500px', width:'100%'}} elevation={0}>
                <img style={{height:"50vh",width:"100%"}} src="/hero.jpeg" alt='study'/>
            </Paper>
            <Container> 
                <br/>
                <br/>
                <Typography variant="h3">Learning Process</Typography>
                <Typography variant="h5">There are many variations of passages of lorem lpsu available,but the majority</Typography>
                <br/>
                <Grid id="hero" container spacing={1}>
                    {serviceTypes.map(items => (
                        <Grid item  sx={12} sm={6} md={3} lg={3} key={items.title} spacing={2}> 
                            <LearningCard items={items}/>
                        </Grid>
                    ))}
                </Grid>
                <br/>
                <br/>
                <Typography variant="h3">You Can Learn Anything, Explore</Typography>
                <Typography variant="h3" color="purple">Featured Courses</Typography>
                <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis</Typography>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid id="hero" container>
                    <Grid item xs={6}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.
                    </Grid>
                    <Grid item xs={6}>
                        <img style={{height:"auto",maxWidth:"100%"}} src={HeroImage} alt='study'/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}