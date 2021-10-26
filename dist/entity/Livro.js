"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const typeorm_1 = require("typeorm");
const Categoria_1 = require("./Categoria");
let Livro = class Livro {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Livro.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Livro.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Livro.prototype, "sinopse", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Livro.prototype, "valorParcela", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Livro.prototype, "editora", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Livro.prototype, "ano", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Livro.prototype, "paginas", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Livro.prototype, "preco", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Livro.prototype, "autor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Livro.prototype, "imagem", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Categoria_1.Categoria, categoria => categoria.id),
    __metadata("design:type", Categoria_1.Categoria)
], Livro.prototype, "categoria", void 0);
Livro = __decorate([
    typeorm_1.Entity()
], Livro);
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map