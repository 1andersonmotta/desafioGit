import { GitRepositoryEntity } from './../entities/gitRepositoryEntity';
import { AppDataSource } from "../data-source";

export const gitRepository = AppDataSource.getRepository(GitRepositoryEntity)