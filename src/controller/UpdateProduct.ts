import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Produto} from "../entity/Produto";

export async function updateProduct(request: Request, response: Response){
    
    const productRespository = getManager().getRepository(Produto);

    await productRespository.update(
        { id: request.params.id },
        request.params.body,
      );

      const updatedProduct = await productRespository.findOne(request.params.contactId);

      response.send(updatedProduct);

}