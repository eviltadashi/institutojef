import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { alunosRepository } from "../alunos.repository";
export declare class UniqueEmailValidator implements ValidatorConstraintInterface {
    private alunoRepository;
    constructor(alunoRepository: alunosRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const uniqueEmail: (opcoesDeValidacao: ValidationOptions) => (objeto: object, propriedade: string) => void;
