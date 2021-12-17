import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Tarefa} from "../entity/Tarefa";

export async function deleteTodo(request: Request, response: Response){
    
    const todoRespository = getManager().getRepository(Tarefa);

    const todo = await todoRespository.delete(request.params.id);

    response.json(todo);

}