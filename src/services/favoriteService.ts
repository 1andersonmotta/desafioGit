import { FavoriteRepositoryEntity } from "../entities/favoriteRepositoryEntity";
import { favoritesRepository } from "../repositories/favoritesRepository";


export class FavoriteService {
    public async favoriteGitRepository(idGitRepository: number, ip: string): Promise<string> {
        const repositoryIsFavorited = await favoritesRepository.findBy({ idGitRepository: +idGitRepository, ip })
        if (repositoryIsFavorited.length > 0) {
            await this.removeFavorited(idGitRepository, ip)
            return 'Favorite removed '
        }
        await this.registerFavorited(idGitRepository, ip)
        return 'Favorite registered'
    }


    public async getFavoriteRepositories(ip: string): Promise<FavoriteRepositoryEntity[]> {
        const repositories = await favoritesRepository.find({ where: { ip }, relations: ['gitRepository'] })
        return repositories
    }

    private async removeFavorited(idGitRepository: number, ip: string) {
        await favoritesRepository.delete({ idGitRepository, ip })
    }

    private async registerFavorited(idGitRepository: number, ip: string) {
        await favoritesRepository.save({ idGitRepository, ip })
    }
}