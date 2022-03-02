import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './pages/Home';
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
      main: '#ff9800',
    },
    text:{
      secondary:'rgba(0,0,0,0.2)'
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
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/note" element={<Notes/>}/>
            <Route path="/create" element={<Create/>}/> */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;
