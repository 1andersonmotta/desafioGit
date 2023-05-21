import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Repository } from "typeorm";
import { GitRepositoryEntity } from "./gitRepositoryEntity";

@Entity('favorite_repository')
export class FavoriteRepositoryEntity {
    @PrimaryColumn({ type: "varchar" })
    ip: string

    @PrimaryColumn({ name: 'id_git_repository', type: 'int' })
    idGitRepository: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @ManyToOne(() => GitRepositoryEntity, (gitRepo) => gitRepo.favoriteRepository)
    @JoinColumn({ name: 'id_git_repository' })
    gitRepository: GitRepositoryEntity
}