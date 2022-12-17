import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { Pokemon } from '../schemas/pokemon.schema';
const moduleMocker = new ModuleMocker(global);

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService, {provide: Pokemon.name, useValue:{}}],
    })
    .useMocker((token) => {
        const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
        const Mock = moduleMocker.generateFromMetadata(mockMetadata);
        if (typeof Mock === 'function') {
          return new Mock();
        }
        return Mock
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
