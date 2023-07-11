import React from 'react';
// import { createRoot } from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import { App } from './containers/App';
import { BrowserRouter } from 'react-router-dom';


import './assets/favicon.ico'

const container = document.getElementById('app')
// const root = createRoot(container)

/*
La propiedad __INITIAL_PROPS__ no es reconocida como parte del objeto window en TypeScript
porque esta propiedad no es parte del estándar de JavaScript ni del navegador.

En Next.js, __INITIAL_PROPS__ es una convención utilizada por el servidor para pasar datos
iniciales al cliente cuando se realiza el renderizado inicial del lado del servidor (SSR).
Es una forma de transferir datos desde el servidor al cliente antes de que la aplicación React
se cargue completamente en el navegador.
*/
const initialProps = window.__INITIAL_PROPS__

const Index = () => {
    
    
    return (
      <BrowserRouter>
        <App {...initialProps}/>
      </BrowserRouter>
    );
  };
  
hydrateRoot(container, <Index />);
