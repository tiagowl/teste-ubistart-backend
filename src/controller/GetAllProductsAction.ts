import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Produto} from "../entity/Produto";

export async function getAllProductsAction(request: Request, response: Response){
    
    const ProductRespository = getManager().getRepository(Produto);

    const products = await ProductRespository.find();

    response.json(products);
}