import webpack from 'webpack'
import whm from 'webpack-hot-middleware'
import wdm from 'webpack-dev-middleware'
import errorOverlay from 'react-dev-utils/errorOverlayMiddleware'
import openBrowser from 'react-dev-utils/openBrowser'
import { config } from "../config"
import webpackClientConfig from '../../../webpack.config.client.js'

/*
 - whm: nos permite el hot module replacement
 - wdm: permite activer el compilador en modo desarrollo.
 - errorOverlay: es una característica de React DevTools, 
    una herramienta de desarrollo para aplicaciones de React.
    El errorOverlay es una capa visual que se superpone a la aplicación
    cuando ocurre un error durante la renderización o ejecución de componentes
    de React.
 - openBrowser: se utiliza para abrir automáticamente el navegador predeterminado del usuario en una URL específica.
 - config: importamos nuestros config
 - webpackClientConfig: es la configuracion de webpack a la que le haremos
   hot module replacement.
*/

/*
    1- se abre la direción en el navegador con openBrowser.
    2 - se crea la compilación
    3 - en el return se envia un return con:
        el compiler:
        un objeto con: el loguer con el que mostrare mensajes,
            el path donde queremos que se exponga el hmr y
            cada cuanto queremos que se actualice el servidor de desarrollo.
        wdm:
            - enviamos el compilador
            - un objeto que: tenga SSR y se escriba en disco.
        activamos el errorOverlay
*/
export const webpackMiddleware = () => {
    openBrowser(`http://localhost:${config.PORT}`)
    const compiler = webpack(webpackClientConfig)
    return [
        whm(compiler, {log: console.log, path: '/__webpack_hmr', hearbeat: 200}),
        wdm(compiler, {serverSideRender: true, writeToDisk: true }),
        errorOverlay()
    ]
}