import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Products } from "../entity/Product"

export class ProductController {

    private productRepository = AppDataSource.getRepository(Products)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const product_id = parseInt(request.params.product_id)


        const product = await this.productRepository.findOne({
            where: { product_id }
        })

        if (!product) {
            return "Unregistered product"
        }
        return product
    }

}