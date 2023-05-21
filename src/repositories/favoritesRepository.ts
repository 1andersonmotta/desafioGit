import { AppDataSource } from "../data-source";
import { FavoriteRepositoryEntity } from "../entities/favoriteRepositoryEntity";

export const favoritesRepository = AppDataSource.getRepository(FavoriteRepositoryEntity)

