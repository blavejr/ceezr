import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { GlobalModule } from './global/global.module';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [PokemonModule, GlobalModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
    onModuleInit() {
      console.log('This is App Module init');
    }
}
