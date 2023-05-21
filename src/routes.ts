import { FavoriteController } from './controller/favoritesController';
import { GitHubController } from './controller/gitHubController';
import { Router } from 'express'

const routes = Router()

routes.post('/repositories/load', new GitHubController().loadGithubRepositories)
routes.get('/repositories/', new GitHubController().getAll)
routes.get('/repositories/details/:id', new GitHubController().getRepositoryDetails)
routes.post('/repositories/favorite/:id', new FavoriteController().favoriteGitRepository)
routes.get('/repositories/favorite/', new FavoriteController().getFavoriteRepositories)



export default routes