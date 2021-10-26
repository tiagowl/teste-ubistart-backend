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
exports.getAllCestaAction = void 0;
const typeorm_1 = require("typeorm");
const Cesta_1 = require("../entity/Cesta");
function getAllCestaAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const cestaRespository = typeorm_1.getManager().getRepository(Cesta_1.Cesta);
        const cesta = yield cestaRespository.find();
        response.json(cesta);
    });
}
exports.getAllCestaAction = getAllCestaAction;
//# sourceMappingURL=GetAllCestaAction.js.map