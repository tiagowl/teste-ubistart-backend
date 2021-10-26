"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookByIdAction = void 0;
const typeorm_1 = require("typeorm");
const Livro_1 = require("../entity/Livro");
function getBookByIdAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookRespository = typeorm_1.getManager().getRepository(Livro_1.Livro);
        const book = yield bookRespository.findOne(request.params.id);
        response.json(book);
    });
}
exports.getBookByIdAction = getBookByIdAction;
//# sourceMappingURL=GetBookById.js.map