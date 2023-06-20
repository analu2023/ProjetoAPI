import { Module } from "@nestjs/common";
import UsuariosController from "./usuario.controller";
import { UsuarioArmazenados } from "./usuario.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";

@Module({
    controllers:[UsuariosController],
    providers:[UsuarioArmazenados, EmailUnicoValidator]
})
export class UsuarioModule{}