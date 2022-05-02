import React, { Component }from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { teal } from '@mui/material/colors';
import AOS from 'aos';
import "aos/dist/aos.css";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Layout from './components/Layout';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: teal[900],
    },
    secondary: {
      main: '#ff9900',
    },
    text:{
      secondary:'rgba(0,0,0,0.8)'
    },
  },
  typography:{
    fontFamily:'Noto Serif JP',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  }
});

class App extends Component {

  componentDidMount(){
    AOS.init({
      duration: 1000
    });
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/mori_website/" element={<Home/>}/>
              <Route path="/mori_website/profile" element={<Profile/>}/>
              <Route path="/mori_website/service" element={<Service/>}/>
              <Route path="/mori_website/contact" element={<Contact/>}/>
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>

    );
  }
}

export default App;
