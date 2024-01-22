import { JwtDecripty } from "src/decodeToken.service";
import { ProgressDTO } from "./dto/atualizaProgress.dto";
import { ProgressRepository } from "./progress.repository";
export declare class ProgressController {
    private jwtDecripty;
    private ProgressRepository;
    constructor(jwtDecripty: JwtDecripty, ProgressRepository: ProgressRepository);
    atualizarConteudo(auth: string, id: string, dados: ProgressDTO): Promise<{
        id: string;
        id_aluno: string;
        id_curso: string;
        id_aula: string;
        visualizado: boolean;
    }>;
}
