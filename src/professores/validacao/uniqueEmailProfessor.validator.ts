import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { Injectable } from "@nestjs/common";
import { professoresRepository } from "../professores.repository"

@Injectable()
@ValidatorConstraint({async: true})
export class verifyUniqueEmailProfessor implements ValidatorConstraintInterface{
    
    constructor(private professorRepository: professoresRepository){}
    
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const emailVerificado = await this.professorRepository.emailVerify(value);
        return !emailVerificado;
    }
}

export const uniqueEmailProfessor = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto:object, propriedade:string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: verifyUniqueEmailProfessor
        })
    }
}