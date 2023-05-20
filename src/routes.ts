import { Router } from 'express'
import { favoritesController } from './controller/favoritesController'
import { gitController } from './controller/gitController'

const routes = Router()

routes.post('/favorites', new favoritesController().create)
routes.post('/git', new gitController().create)
routes.get('/getTopFive', new gitController().getTop5)
routes.get('/getAll', new gitController().getAll)


export default routes