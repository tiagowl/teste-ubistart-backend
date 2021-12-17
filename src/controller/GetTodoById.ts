import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Tarefa} from "../entity/Tarefa";

export async function GetTodoById(request: Request, response: Response){
    
    const todoRespository = getManager().getRepository(Tarefa);

    const todo = await todoRespository.findOne(request.params.id);

    response.json(todo);

}