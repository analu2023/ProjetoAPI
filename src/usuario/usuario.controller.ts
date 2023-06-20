import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioArmazenados } from './usuario.dm';
import {v4 as uuid} from 'uuid';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { AlteraUsuarioDTO } from './dto/atualizaUsuario.dto';

@Controller('/usuario')
export default class UsuariosController{
    constructor(private clsUsuariorAmazenados: UsuarioArmazenados){
    }

    @Get()
    async RetornoUsuarios(){
        const usuariosListados  = await this.clsUsuariorAmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        return listaRetorno;
    }

    @Post()
    async criaUsuario(@Body() dadosUsuarios:UsuarioDTO){
        var retornoUsuario;
        var usuario = new UsuarioEntity(
            uuid() ,
            dadosUsuarios.nome, 
            dadosUsuarios.idade, 
            dadosUsuarios.cidade, 
            dadosUsuarios.email, 
            dadosUsuarios.telefone, 
            dadosUsuarios.senha);

        
        
        this.clsUsuariorAmazenados.AdicionarUsuario(usuario);
            retornoUsuario={
                id: usuario.id,
                nome: usuario.nome,
                message:'Usuario criado'
            }
        
        return retornoUsuario;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novoDados: AlteraUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuariorAmazenados.atualizaUsuario(id, novoDados);
        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariorAmazenados.removeUsuario(id);
        return{
            usuario: usuarioRemovido,
            message:'Usuario Removido'
        }
    }
}