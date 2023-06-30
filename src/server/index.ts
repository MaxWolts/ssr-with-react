import express from "express"
import type { Express, Request, Response } from "express"
import { config } from "./config"
import { template } from "./render/template"
import { render } from "./render"

const app: Express = express()
app.get('*', (req: Request, res: Response) => {
    res.send(template(render(req.url)))
})

app.listen(config.PORT, () => {
    console.log(`Listening in http://localhost:${config.PORT}`)
})