import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FavoriteRepositoryEntity } from "./favoriteRepositoryEntity";

@Entity('git_repository')
export class GitRepositoryEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar' })
    owner: string

    @Column({ type: 'varchar' })
    language: string

    @Column({ type: 'varchar', unique: true })
    link: string

    @Column({ type: 'varchar' })
    description: string

    @Column({ type: 'int' })
    stars: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @OneToMany(() => FavoriteRepositoryEntity, (favorite) => favorite.gitRepository)
    favoriteRepository: FavoriteRepositoryEntity
}