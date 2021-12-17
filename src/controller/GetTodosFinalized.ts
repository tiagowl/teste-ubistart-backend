import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Tarefa} from "../entity/Tarefa";

export async function GetTodosFinalized(request: Request, response: Response){
    
    const todos = await getManager().createQueryBuilder(Tarefa, "tarefa").where("tarefa.concluido = true").getMany();

    response.json(todos);
}