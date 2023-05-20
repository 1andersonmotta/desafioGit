import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { git } from "./git";

@Entity('favorites')
export class favorites {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    ip: string

    @Column({ type: 'date' })
    date: Date

    @ManyToMany(() => git, git => git.favorites)
    @JoinTable({
        name: 'git_favorites',
        joinColumn: {
            name: 'git_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'favorites_id',
            referencedColumnName: 'id'
        }
    })
    gits: git[]
}