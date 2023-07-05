import React from 'react'
import { App } from '../../app/containers/App'
import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { template } from './template'

/*
    StaticRouter
    El StaticRouter es otro componente proporcionado por React Router que se utiliza
    para el enrutamiento en entornos de servidor o en entornos donde no se utiliza
    la API de historial del navegador, como en aplicaciones de React renderizadas
    en el servidor (server-side rendering - SSR).
    Se debe utilizar ya que servidor no entiende de las rutas del cliente que maneja el BrowserRouter.

*/

/*
    En este ejemplo, el StaticRouter se utiliza para representar el enrutamiento
    basado en la URL proporcionada en la propiedad url. Esto permite que la aplicación
    renderice la página correcta en función de la URL solicitada.

    Es importante tener en cuenta que el StaticRouter no realiza la manipulación de la URL
    ni la navegación del lado del cliente. Se utiliza principalmente en entornos de servidor
    o en situaciones donde no se necesita la navegación interactiva del lado del cliente.

    El StaticRouter es útil cuando se necesita generar el HTML inicial en el servidor y
    enviarlo al cliente para su renderización posterior.
*/

/*ServerStyleSheet es propio de styled-components y lo que hace es extraer los estilos
para luego añadirlos a nuestra pagina, con esto ahora los estilos estaran aun cuando desactives el JS.

Cada libreria o tiene su forma de trabajar con el SSR.
*/

export const render = (url:string, initialProps={}) => {
    const sheet = new ServerStyleSheet()
    try {
        const stream = renderToString(
            sheet.collectStyles(
                <StaticRouter location={url}>
                    <App/>
                </StaticRouter>
            )
        )
        const styleTags = sheet.getStyleTags()
        // console.log(styleTags)
        const html = template(stream, initialProps, styleTags)
        return html
    } catch (err) {
        console.log(err);
    }
    
}