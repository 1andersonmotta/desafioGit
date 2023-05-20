import axios from 'axios';
import { Request, Response } from 'express';


export class UserGitService {

    public async getTopFive(req: Request, res: Response) {
        try {


            // Definindo as linguagens
            const linguagens = ['javascript', 'python', 'java', 'go', 'ruby'];
            const repositoriosDestacados = [];

            // Iterando sobre cada linguagem
            for (const linguagem of linguagens) {
                let url = `https://api.github.com/search/repositories?q=language:${linguagem}&sort=stars&order=desc`;
                console.log('url', url);

                // Fazendo a requisição à API do GitHub
                let resposta = await axios.get(url);

                // Armazenando os cinco primeiros repositórios
                let repositorios = resposta.data.items.slice(0, 3);

                repositoriosDestacados.push({
                    linguagem,
                    repositorios,
                });
            }
            return repositoriosDestacados;

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao buscar os repositórios.' });

        }
    }
}