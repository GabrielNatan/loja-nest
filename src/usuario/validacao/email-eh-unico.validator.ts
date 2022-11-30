import { Injectable } from "@nestjs/common";
import {  } from "@nestjs/common/interfaces/external/validator-options.interface";
import { ValidationOptions,registerDecorator, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint} from "class-validator";
import { UsuarioRepository } from "src/usuario/usuarios.repository";

@Injectable()
@ValidatorConstraint({async:true})
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value)
        return !usuarioComEmailExiste
    }

}

export const EmailEhUnico = (opcaesDeValidacao: ValidationOptions)=>{
    return (objeto:Object, propriedade:string)=>{
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options:opcaesDeValidacao,
            constraints: [],
            validator: EmailEhUnicoValidator
        })
    }
}
