import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query, UseGuards } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PokemonEntity } from './entities/pokemon.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth } from '@nestjs/swagger';

@Controller('pokemon')
@UseGuards(AuthGuard('basic'))
@ApiBasicAuth()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get('/damage')
  async damage(@Query('attackerId') attackerId: number, @Query('defenderId') defenderId: number):Promise<number> {
    return this.pokemonService.getDamage(attackerId, defenderId);
  }
 
  @Get()
  async findAll(@Query('page') page: number, @Query('limit') limit: number):Promise<PokemonEntity[]> {
    return this.pokemonService.findAll(page, limit);
  }

  @Get(':id')
  async findOne(@Param('id') id: number):Promise<PokemonEntity> {
    const res = await this.pokemonService.findOne(id);
    if (res) {
      return res
    }
    throw new NotFoundException('No Pokemon');
    
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePokemonDto: UpdatePokemonDto):Promise<PokemonEntity> {
    const res = await this.pokemonService.update(id, updatePokemonDto);
    if (res) {
      return res
    }
    throw new NotFoundException('No Pokemon');
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.pokemonService.remove(+id);
  }
}
