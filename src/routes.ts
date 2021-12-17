import {GetAllTodos} from './controller/GetAllTodos';
import {GetTodoById} from './controller/GetTodoById';
import {updateTodo} from './controller/updateTodo';
import {InsertTodo} from './controller/InsertTodo';
import {GetTodosFinalized} from './controller/GetTodosFinalized';
import {GetTodosNotFinalized} from './controller/GetTodoNotFinalized';
import {Login} from './controller/loginAction';
import {saveUser} from './controller/saveUser';


/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/todos",
        method: "get",
        action: GetAllTodos
    },
    {
        path: "/todos/:id",
        method: "get",
        action: GetTodoById
    },
    {
        path: "/todos/:id",
        method: "post",
        action: updateTodo
    },
    {
        path: "/todos",
        method: "post",
        action: InsertTodo
    },
    {
        path: "/todos/finalized",
        method: "get",
        action: GetTodosFinalized
    },
    {
        path: "/todos/notFinalized",
        method: "get",
        action: GetTodosNotFinalized
    },
    {
        path: "/login",
        method: "post",
        action: Login
    },
    {
        path: "/users",
        method: "post",
        action: saveUser
    }


];