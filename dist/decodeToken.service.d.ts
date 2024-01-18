import { JwtService } from '@nestjs/jwt';
export declare class JwtDecripty {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    decodeToken(token: string): Promise<"professor" | "aluno">;
}
