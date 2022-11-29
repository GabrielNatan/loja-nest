import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuarios.repository";

@Controller('/usuarios')
export class UsuarioController {
    
    private usuarioRepository = new UsuarioRepository();

    @Post()
    async criaUsuario(@Body() dadosDoUsuario){
        this.usuarioRepository.salvar(dadosDoUsuario)
        return dadosDoUsuario;
    }

    @Get()
    async listaUsuatio(){
        return this.usuarioRepository.listar()
    }
}