import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonService } from './pokemon/pokemon.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger,
  ) {
    this.logger.log('This is the logger');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
