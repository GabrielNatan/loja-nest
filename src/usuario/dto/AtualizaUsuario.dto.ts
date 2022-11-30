import { IsEmail, IsNotEmpty, MinLength, IsOptional } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO {

        @IsNotEmpty({message: 'O nome não pode ser vazio'})
        @IsOptional()
        nome: string;

        @IsEmail(undefined,{message: 'O email informado é invalido'})
        @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
        @IsOptional()
        email: string;

        @MinLength(6,{message:'A senha deve ter no minimo 6 caracteres'})
        @IsOptional()
        senha: string;

}