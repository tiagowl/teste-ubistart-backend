import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    senha: string;

}