import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { favorites } from "./favorites";

@Entity('gits')
export class git {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    language: string

    @Column({ type: 'json', nullable: true })
    description: JSON

    @ManyToMany(() => favorites, favorites => favorites.gits)
    favorites: favorites[]

}