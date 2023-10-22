// Product.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_name: string;

    @Column()
    brand: string;

    @Column()
    price: number;

    @Column()
    category: string;

    @Column()
    ingredients: string;

    @Column()
    description: string;

    @Column()
    image_url: string;
}
