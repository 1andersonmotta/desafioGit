import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'

AppDataSource.initialize().then(() => {
    const app = express()
    app.use(express.json())
    app.use(routes)
    const port = process.env.PORT
    console.log(`http://localhost:${port}`);

    return app.listen(port)
})