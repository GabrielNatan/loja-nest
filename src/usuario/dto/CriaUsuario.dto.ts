import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO {

        @IsNotEmpty({message: 'O nome não pode ser vazio'})
        nome: string;

        @IsEmail(undefined,{message: 'O email informado é invalido'})
        @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
        email: string;

        @MinLength(6,{message:'A senha deve ter no minimo 6 caracteres'})
        senha: string;

}