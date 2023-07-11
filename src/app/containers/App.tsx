import React from 'react';
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from '../styles/GlobalStyles';
import { Menu } from '../components/Menu';
import { Home } from '../pages/Home';
import { Galaxies } from '../pages/Galaxies';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';
import { AppContainer } from './styles';
import useTheme from '../hooks/useTheme';

export const App = (props) => {
  const [theme, setThemeColor] = useTheme();

  return (
    <AppContainer theme={theme}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyles />
      <Menu theme={theme} setThemeColor={setThemeColor}/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/galaxias" element={<Galaxies {...props}/>} />
      </Routes>
      <Footer/>
    </AppContainer>
  )
}