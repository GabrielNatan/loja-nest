import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto/criarProduto.dto";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository){}
    
    @Post()
    async criaproduto(@Body() dadosDoproduto : CriaProdutoDTO){
        this.produtoRepository.salvar(dadosDoproduto)
        return dadosDoproduto;
    }

    @Get()
    async listaUsuatio(){
        return this.produtoRepository.listar()
    }
}