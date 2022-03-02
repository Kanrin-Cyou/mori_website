import React from 'react';
import ResponsiveAppBar from './Appbar';

export default function Layout({children}){

    return (
        <div> 
              <ResponsiveAppBar/>
                {/* <AppBar elevation={3} sx={{background:"secondary",borderBottom:1,borderColor: 'primary.main'}}>
                    <Toolbar sx={{justifyContent: 'center' }}>
                        <Typography variant='h5' sx={{pr:80 ,color:"secondary"}}>
                            XX法律事務所
                        </Typography>

                        <Button 
                        color="secondary" 
                        disableElevation
                        onClick={()=> navigate('/login')}
                        sx = {{m:2,color:"text.secondary"}}
                        >
                        事務所案内
                        </Button>

                        <Button 
                        color="secondary" 
                        disableElevation
                        onClick={()=> navigate('/login')}
                        sx = {{m:2,color:"text.secondary"}}
                        >
                        主な取払分野
                        </Button>
                        
                        <Button 
                        color="secondary" 
                        onClick={()=> navigate('/register')}
                        disableElevation
                        sx = {{m:2,color:"text.secondary"}}
                        >
                        アクセス
                        </Button>
                    </Toolbar>
                </AppBar> */}
            {children}

        </div>
    )
}