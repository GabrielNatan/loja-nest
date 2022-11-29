import {IsArray, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

export class CaracteristicaProdutoDTO {
    nome: string;
    descricao: string;
  }
  export class ImagemProdutoDTO {
    url: string;
    descricao: string;
  }

  export class CriaProdutoDTO {
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    @ValidateNested()
    @IsArray() 
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];
    @ValidateNested()
    @IsArray() 
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];
    categoria: string;
  }