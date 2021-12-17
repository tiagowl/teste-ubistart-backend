import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Tarefa} from "../entity/Tarefa";

export async function GetTodosNotFinalized(request: Request, response: Response){
    
    const todos = await getManager().createQueryBuilder(Tarefa, "tarefa").where("tarefa.concluido = false").getMany();

    response.json(todos);
}