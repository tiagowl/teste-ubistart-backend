import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import {Users} from './Users';


@Entity()
export class Tarefa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    estado: string;

    @CreateDateColumn()
    insertDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

    @Column()
    prazo: Date;

    @ManyToOne(() => Users, user => user.id)
    userId: Users;

}