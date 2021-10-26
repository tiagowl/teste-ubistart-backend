import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Produto} from "../entity/Produto";

export async function getProductByIdAction(request: Request, response: Response){
    
    const productRespository = getManager().getRepository(Produto);

    const product = await productRespository.findOne(request.params.id);

    response.json(product);

}