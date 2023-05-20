import { AppDataSource } from "../data-source";
import { git } from "../entities/git";

export const gitRepository = AppDataSource.getRepository(git)