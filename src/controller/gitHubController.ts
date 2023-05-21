import { Request, Response } from "express";
import { GitHubService } from "../services/gitHubService";

export class GitHubController {
    public async loadGithubRepositories(req: Request, res: Response) {
        try {
            await new GitHubService().loadGithubRepositories()
            return res.send('Repositories Loaded with successful')
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: Request, res: Response): Promise<any> {
        try {
            const repositories = await new GitHubService().getAll()
            return res.send(repositories)

        } catch (error) {
            console.log(error);
        }
    }

    public async getRepositoryDetails(req: Request, res: Response): Promise<any> {
        const param = req.params
        const id = param.id
        try {
            const repositories = await new GitHubService().getRepositoryDetails(+id)
            return res.send(repositories)
        } catch (error) {
            console.log(error);
        }
    }

}