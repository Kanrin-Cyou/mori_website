import React from 'react';
import WorkImage from '../asset/workplace.jpeg'
import LawImage from "../asset/law.jpeg";
import {Grid,Box,Button, Typography,Container} from '@mui/material';

export default function Profile(){
    
    return(
        <Box
            sx={{
                width: '100vw',
                backgroundColor: 'primary.main',
            }}
        >
                <Container sx={{pt:10, pb:8}}>
                            <Typography
                                variant="h3"
                                align="left"
                                component="div"
                                sx={{color:"white",pt:5, flexGrow: 1 }}
                            >
                                事務所案内
                            </Typography>
                </Container> 

                <Box 
                        sx={{
                            width: '100vw',
                            backgroundColor: 'white',
                        }}
                >
                        <Container sx={{pt:8}}>
                        
                            <Typography sx={{color:"primary.main"}} align="left" variant="h3">
                                ごあいさつ
                            </Typography>

                            <Grid container spacing={2}>

                                <Grid item xs={12} md={6}
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >

                                    <Box sx={{pt:5, pb:5,pr:5}}>
                                        <img style={{height:"auto",maxWidth:"100%"}} src={LawImage} alt='study'/>
                                    </Box>
                                   

                                    <Typography sx={{color:"primary.main"}} align="left" variant="h4" >
                                    行政書士　森下 洋
                                    </Typography>
                                    <Typography align="left" variant="h5" >
                                    <br/>
                                    ■ 登録番号:06081463
                                    <br/>
                                    ■ 早稲田大学政経学部卒
                                    <br/>
                                    ■ 東京都行政書士会新宿支部所属
                                    <br/>
                                    ■ 宅地建物取引士
                                    
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} md={6}
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <Typography sx={{pt:5, pb:8, color:"text.secondary"}} align="left" variant="h5">
                                        当事務所は都営新宿線新宿三丁目駅のそばにある総合事務所です。
                                        <br/>
                                        <br/>
                                        電子定款作成及び認証代理・各種許認可・会社関係書類作成・入国管理局関係書類作成・サイト売買契約書作成等に専門性を有し、
                                        お客様の実情に合わせた柔軟な対応を第一に活動しております。会社設立後の経営支援についても、対応しております。
                                        <br/>
                                        <br/>
                                        併設の税理士、司法書士、社会保険労務士各事務所と緊密に連携しておりますので多くの事例に即応できます。
                                        <br/>
                                        <br/>
                                        立上げ当初で運営コストを抑えたいお客様向けの価格帯のサービスなども、
                                        多くのお客様にご利用いただいており、好評です。
                                        <br/>
                                        <br/>
                                        また、風俗営業、運送業、古物商、電気通信事業、飲食店営業許可等、
                                        各種許認可の取得にも実績がございます。
                                        <br/>
                                        <br/>
                                        くらしと仕事についての身近な相談者としてお気軽にご活用ください。
                                        <br/>
                                        <br/>
                                        よろしくお願い致します。
                                    </Typography>
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

                            <Typography sx={{pb:2, color:"primary.main"}} align="left" variant="h3">
                                行政書士M&K総合事務所
                            </Typography>

                            <Typography sx={{pb:2}} align="left" variant="h4">
                                事務所概要
                            </Typography>



                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Typography align="left" sx={{pb:5}} variant="h5" >
                                        <br/>
                                        ■ 登録番号:06081463
                                        <br/>
                                        ■ 早稲田大学政経学部卒
                                        <br/>
                                        ■ 東京都行政書士会新宿支部所属
                                        <br/>
                                        ■ 宅地建物取引士        
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography align="left" sx={{pb:5}} variant="h5" >
                                        <br/>
                                        ■ 登録番号:06081463
                                        <br/>
                                        ■ 早稲田大学政経学部卒
                                        <br/>
                                        ■ 東京都行政書士会新宿支部所属
                                        <br/>
                                        ■ 宅地建物取引士        
                                    </Typography>

                                </Grid>

                            </Grid>

                            <img style={{height:"auto",maxWidth:"100%"}} src={WorkImage} alt='workplace'/>

                        </Container>

                        
                </Box>            

        </Box>        
    )
}