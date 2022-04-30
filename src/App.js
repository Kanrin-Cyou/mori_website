import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import React from "react";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

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
    fontFamily:'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {

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

export default App;
