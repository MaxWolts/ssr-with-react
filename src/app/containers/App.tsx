import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from '../styles/GlobalStyles';
import { Menu } from '../components/Menu';
import { Home } from '../pages/Home';
import { Galaxies } from '../pages/Galaxies';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';

export const App = (props) => {
  const [themeColor, setThemeColor] = useState<'pink'|'blue'|'lightBlue'>('blue')
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyles />
      <Menu setThemeColor={setThemeColor} themeColor={themeColor}/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/galaxias" element={<Galaxies {...props} setThemeColor={setThemeColor}/>} />
      </Routes>
      <Footer/>
    </>
  )
}