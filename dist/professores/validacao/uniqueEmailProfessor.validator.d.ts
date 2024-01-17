import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { professoresRepository } from "../professores.repository";
export declare class verifyUniqueEmailProfessor implements ValidatorConstraintInterface {
    private professorRepository;
    constructor(professorRepository: professoresRepository);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const uniqueEmailProfessor: (opcoesDeValidacao: ValidationOptions) => (objeto: object, propriedade: string) => void;
