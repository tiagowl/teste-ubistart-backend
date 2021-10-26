"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const GetAllBooksAction_1 = require("./controller/GetAllBooksAction");
const GetAllCestaAction_1 = require("./controller/GetAllCestaAction");
const GetBookById_1 = require("./controller/GetBookById");
const SaveItemCestaAction_1 = require("./controller/SaveItemCestaAction");
const SaveUsuarioAction_1 = require("./controller/SaveUsuarioAction");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/books",
        method: "get",
        action: GetAllBooksAction_1.getAllBooksAction
    },
    {
        path: "/books/:id",
        method: "get",
        action: GetBookById_1.getBookByIdAction
    },
    {
        path: "/cesta",
        method: "get",
        action: GetAllCestaAction_1.getAllCestaAction
    },
    {
        path: "/usuario",
        method: "post",
        action: SaveUsuarioAction_1.SaveUsuarioAction
    },
    {
        path: "/cesta",
        method: "post",
        action: SaveItemCestaAction_1.saveItemCestaAction
    }
];
//# sourceMappingURL=routes.js.map