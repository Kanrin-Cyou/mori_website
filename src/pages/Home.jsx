import React from 'react';
import {Grid,Box,Button, Typography,Container} from '@mui/material';
import LawImage from "../asset/law.jpeg";
import WorkImage from '../asset/workplace.jpeg'
import LearningCard from '../components/LearningCard'
import { useLocation, useNavigate } from "react-router-dom";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';

export default function Home(){

    const navigate = useNavigate()

    const serviceTypes = [
        {
            title:'契約書作成',
            icon: <NoteAltOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'利用規約作成',
            icon: <RuleOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'補助金·給付金申請',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'契約書作成',
            icon: <NoteAltOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'利用規約作成',
            icon: <RuleOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        },
        {
            title:'補助金·給付金申請',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam facilis ex nobis perferendis eos, officiis placeat nemo! Praesentium, rerum? Praesentium reiciendis, veritatis cupiditate ratione reprehenderit voluptate pariatur tempora dolorem.'
        }
    ]

    const serviceData = [
        {
            title:'10M',
            note:'Recovered cost',
        },
        {
            title:'50+',
            note:'Attorneys',
        },
        {
            title:'850+',
            note:'Global Customers',
        },
        {
            title:'98%',
            note:'Successful Cases',
        },
        
    ]

    return(
        <Box>
            <Box
            sx={{
                width: '100vw',
                backgroundColor: 'primary.main',
            }}
            >
                <Container sx={{pt:15, pb:10}}>
                    <Grid container spacing={2} >
                        <Grid item xs={7}>
                            <Typography
                                variant="h2"
                                component="div"
                                sx={{color:"white",pt:5, flexGrow: 1 }}
                            >
                                Unbelievable Solution
                                <br/>
                                For All Legal Cases
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{color:"white",pt:5,pr:3,flexGrow: 1 }}
                            >
                                We support businesses through periods of expansion,
                                succession, and all other important transitions.
                            </Typography>

                            <Button 
                                color="secondary" 
                                variant="contained"
                                onClick={()=> navigate('/login')}
                                sx = {{mt:10, pt:3,pb:3, pl:5,pr:5,color: 'black'}}
                            >
                                事務所案内
                            </Button>

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{color:"white",pt:20, flexGrow: 1 }}
                            >
                                Our Acieved Awards
                                <br/>
                                succession, and all other important transitions.
                            </Typography>
                        </Grid>

                        <Grid item xs={5} pt={15}>
                            <img style={{height:"auto",maxWidth:"100%"}} src={LawImage} alt='study'/>
                        </Grid>

                    </Grid>
                </Container>    
            </Box>

            <Box 
                sx={{
                    width: '100vw',
                    backgroundColor: '#fafafa',
                }}
            >
                <Container sx={{pt:10, pb:10}}>

                    <Grid container spacing={2} pb={5}>
                        <Grid item xs={7}>
                            <Typography variant="h3">
                                We Earn Your Trust And Are Diligent In Your Case.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid id="hero" container spacing={2}>
                        {serviceTypes.map(items => (
                            <Grid item  sx={12} sm={6} md={4} key={items.title} spacing={2}> 
                                <LearningCard items={items}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box 
                sx={{
                    width: '100vw',
                    backgroundColor: 'white',
                }}
            >
                <Container sx={{pt:10, pb:10}}>

                    <Typography align="center" variant="h3">
                        Committed To Helping Our
                        <br/>
                        Clients Succeed.
                    </Typography>

                    <Typography sx={{pt:5, pb:10, color:"text.secondary"}} align="center" variant="h5" >
                        We Are Committed To Delivering Top Quality Legal Service.
                    </Typography>

                    <Grid id="hero" align="center" container pb={10} spacing={2}>
                        {serviceData.map(items => (
                             <Grid item sx={12} sm={6} md={3} spacing={2}> 
                                <Typography align="center" variant="h3" color="primary">
                                    {items.title}
                                </Typography>
                                <Typography align="center" variant="h6">
                                    {items.note}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>

                    <img style={{height:"auto",maxWidth:"100%"}} src={WorkImage} alt='workplace'/>

                </Container>
            </Box>

            <Box
            sx={{
                width: '100vw',
                backgroundColor: 'primary.main',
            }}
            >
                <Container sx={{pt:5, pb:10}}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{color:"white",pt:5, flexGrow: 1 }}
                            >
                                - アクセス -
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{color:"white", flexGrow: 1 }}
                            >
                                <br/>
                                東京都豊島区東池袋
                                <br/>
                                TEL: 03-5956-6301
                                <br/>
                                FAX: 03-5956-6301
                                <br/>
                                Email: 03-5956-6301
                            </Typography>
                          
                        </Grid>

                        <Grid item xs={6} >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{color:"white",pt:5, flexGrow: 1 }}
                            >
                                MAP
                            </Typography>
                        </Grid>

                    </Grid>
                </Container>    
            </Box>

        </Box>
    )
}