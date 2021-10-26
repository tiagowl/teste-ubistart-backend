import {Entity, Column} from "typeorm";

@Entity()
export class Produto {

    @Column()
    id: number;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    categories: string;

    @Column()
    price: number;

    @Column()
    brand: string;

}