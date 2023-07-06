import express from "express"
import type { Express, Request, Response } from "express"
import { config } from "./config"
import { template } from "./render/template"
import { render } from "./render"
import { webpackMiddleware } from "./middlewares/webpackMiddleware"
import axios from "axios"

const app: Express = express()

/* 
    se activa este middleware si se encuentra en modo desarrollo
    si no usara el build.
*/
const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
    app.use(webpackMiddleware())
} else {
    app.use(express.static('dist'))
}

app.use(express.static('dist'))

app.get('/galaxias', async (req:Request, res: Response) => {
    try {
        const { data } = await axios.get("https://images-api.nasa.gov/search?q=galaxies")
        const initialProps = {
            galaxies: data?.collection?.items,
        }
        res.send(render(req.url, initialProps))
    } catch (err) {
        throw new Error("An error ocurred in /galaxias")
    }
})

app.get('*', (req: Request, res: Response) => {
    res.send(template(render(req.url)))
})

app.listen(config.PORT, () => {
    console.log(`Listening in http://localhost:${config.PORT}`)
})