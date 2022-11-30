import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuarios.repository';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';

@Module({
  controllers: [UsuarioController],
  providers:[UsuarioRepository, EmailEhUnicoValidator]
})
export class UsuarioModule {}
