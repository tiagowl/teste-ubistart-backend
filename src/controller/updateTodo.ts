import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Tarefa} from "../entity/Tarefa";

export async function updateTodo(request: Request, response: Response){
    
      await getConnection()
      .createQueryBuilder()
      .update(Tarefa)
      .set({concluido: true})
      .where("id = :id", {id: request.params.id});

      response.json({response: "Tarefa concluída"});

}