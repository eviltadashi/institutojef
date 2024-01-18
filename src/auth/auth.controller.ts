import { Controller, Post, Body, UnauthorizedException, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() dadosLogin: LoginDto){
    const aluno = await this.authService.validatealuno(dadosLogin.email, dadosLogin.senha);
    if (!aluno) {
      const professor = await this.authService.validateProfessor(dadosLogin.email, dadosLogin.senha);
      if(!professor){
        throw new UnauthorizedException('Credenciais inválidas');
      }
      return this.authService.login(professor);
    }
    return this.authService.login(aluno);
  }
}
