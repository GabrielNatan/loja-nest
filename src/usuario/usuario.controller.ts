import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioRepository } from "./usuarios.repository";
import {v4} from 'uuid'
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}
    
    @Post()
    async criaUsuario(@Body() dadosDoUsuario : CriaUsuarioDTO){
        let usuarioEntity = new UsuarioEntity();
        usuarioEntity = {...dadosDoUsuario, id:v4()} 
        this.usuarioRepository.salvar(usuarioEntity)
        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            mensagem: 'usuário criado com sucesso',
        };
    }

    @Get()
    async listUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
    
        return usuariosLista;
    }
}