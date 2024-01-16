import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { alunosRepository } from "../alunos.repository";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private alunoRepository: alunosRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const emailExiste = await this.alunoRepository.existeComEmail(value);
        return !emailExiste;
    }
}

export const uniqueEmail = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto:object, propriedade:string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: UniqueEmailValidator
        })
    }
}