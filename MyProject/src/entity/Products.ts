import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    image_url: string;

    @Column()
    description: string;

}
