import { Request, Response } from "express";
import { gitRepository } from "../repositories/gitRepository";
import { UserGitService } from "../services/usersGit";

export class gitController {
    async create(req: Request, res: Response) {
        const { language, description } = req.body

        try {
            const newgit = gitRepository.create({ language, description })
            await gitRepository.save(newgit)

            return res.status(201).json(newgit)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }


    async getTop5(req: Request, res: Response) {
        try {
            const userGit = await new UserGitService().getTopFive(req, res) as any
            console.log('userGit', userGit.length);

            for (let i = 0; i < userGit.length; i++) {
                let newgit = gitRepository.create({ language: userGit[i].linguagem, description: userGit[i].repositorios })
                await gitRepository.save(newgit)

            }

            return res.status(201).json(userGit)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const git = await gitRepository.find();
            const gitFormat: (string | null)[] = []
            console.log('git', git.length);

            for (let i = 0; i < git.length; i++) {

                const test1 = JSON.stringify(git[i].description)
                const regex = /"full_name":"([^"]+)"/;
                const match = test1.match(regex);
                const fullName = match ? match[1] : null;
                gitFormat.push(fullName)
            }
            const novaArr = gitFormat.filter((este, i) => gitFormat.indexOf(este) === i);

            return res.status(201).json(novaArr)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

}