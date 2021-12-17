import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Users} from "../entity/Users";
import jwt from 'jsonwebtoken';

export async function Login(request: Request, response: Response){

    const userBody = request.body;
    
    const user = await getManager().createQueryBuilder(Users, "users").where(`users.nome = :nome`, {nome: userBody.nome}).getOne();

    if(!user.nome){
        response.status(401).json({error: "Usuario inexistente"});
    }

    if(userBody.senha !== user.senha){
        response.status(401).json({error: "Senha incorreta"});
    }

    const {id} = user;

    response.json({
        user,
        token: jwt.sign({id}, 'c11845c9a05c8df7b137f49504dd918b', {
            expiresIn: '7d'
        })
    });
}