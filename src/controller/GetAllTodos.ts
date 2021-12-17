import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Tarefa} from "../entity/Tarefa";

export async function GetAllTodos(request: Request, response: Response){
    
    const TodoRespository = getManager().getRepository(Tarefa);

    const todos = await TodoRespository.find();

    response.json(todos);
}