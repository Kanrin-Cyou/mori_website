import React from 'react';
import {Grid,Box,Button, Typography,Container} from '@mui/material';
import WorkImage from '../asset/workplace.jpeg';
import LawImage from "../asset/law.jpeg";

export default function Service(){

    const legalContract = [
        {
            title:'業務委託契約書',
            note:'業務委託契約書とは、特定の仕事を行うことを目的とした契約です。個別の案件・業務内容について取り交わすのが業務委託契約書になります。',
        },
        {
            title:'売買契約書',
            note:'売買契約書とは、売り手と買い手の間で、商品やサービスの取引に関しての約束事[取引や支払いの条件等=いつ、何を、どれだけ(数量)、いくらで売るのか]を書面にしたものです。事前にお互いが合意した売買の条件を明確にし、合意の上で取引をすることを目的とします。',
        },
        {
            title:'土地不動産売買契約書',
            note:'不動産の売買契約は高額な資産を対象とする大きな取引になるため、専門家に依頼してしっかりとした契約書を作成することをおすすめします。',
        },
        {
            title:'業務提携契約書',
            note:'業務提携契約書とは、会社間でお互いに得意な分野で提携したり、業務の一部を他社に委託するときに締結する契約書です。当ツールでは単純に「商品」を販売する会社と製造する2社が、製造と販売をそれぞれが担当するという内容の契約書となっております。',
        }     
    ]

    const legalPermission = [
        {
            title:'外国人就労ビザ',
            note:'外国人従業員の雇用、外国人研修生の受入れ、永住・帰化など、入国管理局へそれぞれビザ申請をする必要があります。',
        },
        {
            title:'飲食業許可',
            note:'レストラン、カフェなどの飲食店をはじめるには、保健所の許可が必要となります。施設が基準を満たす事、食品衛生責任者と配置することなどが求められます。',
        },
        {
            title:'古物商許可',
            note:'リサイクルショップやネットオークションで中古品売買の商売をしている人は、許可が必要となります。',
        },
        {
            title:'食品営業許可',
            note:'お菓子の製造や、食肉製品の製造など、製造する食品の種類ごとに許可が必要となります。',
        },
    ]

    const laborRelated = [
        {
            title:'産業医契約書',
            note:'産業医は常時50人以上の従業員がいる職場で選任が義務付けられています。依頼する内容を明確にし、契約を締結しておくことが重要です。',
        },
        {
            title:'雇用契約書作成',
            note:'従業員を採用するときは、賃金や労働時間などの労働条件を明示することが、労働基準法で義務付けられています。従業員とトラブルになる会社は、たいがいこの労働条件をあいまいなままで採用しているようです。',
        },
        {
            title:'各種規程作成',
            note:'就業規則には主要な規程だけを定めておき、詳細な内容は別に諸規程(別規程)として定めることが一般的です。賃金規定、育児介護規定などがあります。',
        },
    ]

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
                            主な取扱分野
                        </Typography>
            </Container> 

            <Box 
                    sx={{
                        width: '100vw',
                        backgroundColor: 'white',
                    }}
            >
                    <Container sx={{pt:8,pb:8}}>
                        <Typography align="left" sx={{pb:5}} variant="h4"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            法務 - 契約書作成
                        </Typography>
                        {legalContract.map(items => (
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <Typography align="left" sx={{pt:2, color:"primary.main"}} variant="h5">
                                    {items.title}
                                </Typography>
                                <Typography align="left" sx={{pt:2,pb:5, color:"text.secondary"}} variant="h6">
                                    {items.note}
                                </Typography>
                            </Box>
                        ))}

                        <Typography align="left" sx={{pt:2,pb:5}} variant="h4"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            法務 - 許認可
                        </Typography>
                        {legalPermission.map(items => (
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <Typography align="left" sx={{pt:2, color:"primary.main"}} variant="h5">
                                    {items.title}
                                </Typography>
                                <Typography align="left" sx={{pt:2,pb:5, color:"text.secondary"}} variant="h6">
                                    {items.note}
                                </Typography>
                            </Box>
                        ))}

                        <Typography align="left" sx={{pt:2,pb:5}} variant="h4"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            労務 - 就業規則・契約書作成
                        </Typography>
                        {laborRelated.map(items => (
                            <Box
                            data-aos="fade-up"
                            data-aos-duration="700"
                            >
                                <Typography align="left" sx={{pt:2, color:"primary.main"}} variant="h5">
                                    {items.title}
                                </Typography>
                                <Typography align="left" sx={{pt:2,pb:5, color:"text.secondary"}} variant="h6">
                                    {items.note}
                                </Typography>
                            </Box>
                        ))}

                        
                
                    </Container>
                        
            </Box>  

    </Box>        
    )
}