import React from 'react';
import {Grid,Box,Button, Typography,Container} from '@mui/material';
import LawImage from "../asset/law.jpeg";
import WorkImage from '../asset/workplace.jpeg'
import LearningCard from '../components/LearningCard'
import {useLocation, useNavigate } from "react-router-dom";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';

export default function Home(){

    const navigate = useNavigate()

    const serviceTypes = [
        {
            title:'総合顧問契約',
            icon: <NoteAltOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'月額2.2万円 ~ 。SNSを用いた個別対応と月一回の面談で会社経営の諸問題についての相談に応えます。'
        },
        {
            title:'入国管理業務',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'在留資格取得手続全般に対応いたします。不許可案件の再申請についても多くの許可実績がございます。'
        },
        {
            title:'ウェブサイト売買契約書作成',
            icon: <NoteAltOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'実績多数。サイト売買に関する諸問題に対応可能です。 経験に基づき、迅速に処理いたします。'
        },
        {
            title:'電子定款作成及び各種会社設立関係書類作成',
            icon: <RuleOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'実績多数。印紙代4万円を節約できます。'
        },
        {
            title:'屋外広告物',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'実績豊富。業登録・広告物許可など、全国対応いたします。'
        },
        {
            title:'古物商許可',
            icon: <RuleOutlinedIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'リサイクルショップなどを始めるときに必要となります。'
        },
        {
            title:'建設業許可',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'新規・更新、知事・大臣各種対応いたします。'
        },
        {
            title:'夫婦財産契約作成',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'夫婦財産契約書を作成します。'
        },
        {
            title:'記帳会計業務',
            icon: <CurrencyExchangeIcon color="primary" fontSize="large" sx={{mt:2}}/>,
            content:'日々の経理記帳業務を代行します。'
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
                <Container sx={{pt:10, pb:8}}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={7}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <Typography
                                variant="h3"
                                component="div"
                                sx={{color:"white",pt:5, flexGrow: 1 }}
                            >
                                新宿の行政書士
                                <br/>
                                行政書士M&K総合事務所へ
                                <br/>
                                ようこそ
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{color:"white",pt:5,pr:3,flexGrow: 1 }}
                            >
                                電子定款作成及び認証代理・各種許認可・会社関係書類作成・入国管理局関係書類作成・サイト売買契約書作成等に専門性を有し、お客様の実情に合わせた柔軟な対応を第一に活動しております。
                            </Typography>

                            <Button 
                                color="secondary" 
                                variant="contained"
                                textSizeMedium
                                onClick={()=> navigate('/mori_website/contact')}
                                sx = {{mt:5, pt:2,pb:2,pl:3,pr:3,color:'black'}}
                                xs = {{color:'black'}}
                            >
                                お問い合わせ
                            </Button>

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{mt:5, flexGrow: 1,color:"white" }}
                            >
                                Our Acieved Awards
                                <br/>
                                succession, and all other important transitions.
                            </Typography>
                        </Grid>

                        <Grid display={{xs:'none',md:'block'}} item xs={0} md={5} pt={15} mt={5}
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
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
                <Container sx={{pt:8, pb:8}}>

                    <Grid container spacing={2} pb={5}>
                        <Grid item sx={7}>
                            <Typography variant="h3">
                                業務内容
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid id="hero" container spacing={2}>
                        {serviceTypes.map(items => (
                            <Grid item style={{width:"100%"}} xs={6} md={4} key={items.title} spacing={2}> 
                                <LearningCard items={items} nav={navigate}/>
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
                <Container sx={{pt:8, pb:8}}>

                    <Typography align="center" variant="h3">
                        Committed To Helping Our
                        <br/>
                        Clients Succeed.
                    </Typography>

                    <Typography sx={{pt:5, pb:8, color:"text.secondary"}} align="center" variant="h5" >
                        We Are Committed To Delivering Top Quality Legal Service.
                    </Typography>

                    <Grid id="hero" align="center" container pb={8} spacing={2}>
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


        </Box>
    )
}
