import { Module } from '@nestjs/common';
import { ProdutosModule } from './produto/poduto.molude';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule,ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
