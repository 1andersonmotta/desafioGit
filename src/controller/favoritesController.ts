import { Request, Response } from "express";

import { FavoriteService } from "../services/favoriteService";

export class FavoriteController {

    public async favoriteGitRepository(req: Request, res: Response): Promise<any> {
        const param = req.params
        const idGitRepository = param.id
        const ip = req.ip
        try {
            const message = await new FavoriteService().favoriteGitRepository(+idGitRepository, ip)
            return res.send(message)
        } catch (error) {
            console.log(error);
        }
    }


    public async getFavoriteRepositories(req: Request, res: Response): Promise<any> {
        const ip = req.ip
        try {
            const repositories = await new FavoriteService().getFavoriteRepositories(ip)
            return res.send(repositories)
        } catch (error) {
            console.log(error);
        }
    }
}