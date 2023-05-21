import axios from 'axios';
import { gitRepository } from "../repositories/gitRepository";
import { GitRepositoryEntity } from '../entities/gitRepositoryEntity';

interface GitRepositoryDto {
    owner: string,
    language: string,
    link: string,
    description: string,
    stars: number
}

export class GitHubService {

    public async loadGithubRepositories() {
        try {
            const topRepositories = await this.extractRepositories();
            await this.saveTopRepositories(topRepositories)

        } catch (error) {
            console.error(error);
        }
    }

    private async extractRepositories(): Promise<GitRepositoryDto[]> {
        const languages = ['javascript', 'python', 'java', 'go', 'ruby'];
        let repositories: GitRepositoryDto[] = []
        for (const language of languages) {
            const url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;
            const response = await axios.get(url);
            let formatRepo = this.formatObj(response)
            repositories.push(...formatRepo)
        }
        return repositories
    }

    private formatObj(resposta: any): GitRepositoryDto[] {
        let repositorios = resposta.data.items.slice(0, 3);
        let retorno: GitRepositoryDto[] = []
        for (let i of repositorios) {
            retorno.push({
                owner: i.owner.login,
                language: i.language,
                link: i.html_url,
                description: i.description,
                stars: i.stargazers_count
            })
        }
        return retorno
    }

    private async saveTopRepositories(repositories: GitRepositoryDto[]): Promise<void> {
        for (let repository of repositories) {
            await gitRepository.save(repository)
        }
    }

    public async getRepositoryDetails(id: number): Promise<any> {
        const repository = await gitRepository.findBy({ id })
        return repository
    }


    public async getAll(): Promise<GitRepositoryEntity[]> {
        const repositories = await gitRepository.find({ select: ['id', 'language', 'link'], order: { language: 'ASC' } });
        return repositories
    }
}