import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Users} from "../entity/Users";

export async function saveUser(request: Request, response: Response){
    
    const UserRespository = getManager().getRepository(Users);

    const user = await UserRespository.save(request.body);

    response.json(user);
}