import { AppDataSource } from "../data-source";
import { favorites } from "../entities/favorites";

export const favoritesRepository = AppDataSource.getRepository(favorites)

