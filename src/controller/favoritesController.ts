import { Request, Response } from "express";
import { favoritesRepository } from "../repositories/favoritesRepository";

export class favoritesController {
    //criar favoritos
    async create(req: Request, res: Response) {

        const { git_id } = req.body
        if (!git_id) {
            return res.status(400).json({ message: 'O id do Git é Obrigatório' })
        }
        try {
            //const newfavorites = favoritesRepository.create({ ip })

            //await favoritesRepository.save(newfavorites)

            //return res.status(201).json(newfavorites)


        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}