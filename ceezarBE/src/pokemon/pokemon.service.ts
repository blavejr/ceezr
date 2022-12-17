import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon, PokemonDocument } from '../schemas/pokemon.schema';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<PokemonDocument>,
  ) {}

  private getTypeModifier(attacker:PokemonDocument, defender: PokemonDocument):number {
    if ([attacker.type_1, attacker.type_2].includes('electric') && [defender.type_1, defender.type_2].includes('water')) return 2
    if ([attacker.type_1, attacker.type_2].includes('electric') && [defender.type_1, defender.type_2].includes('rock')) return 0.5
    return 1
  }

  async create(createPokemonDto: CreatePokemonDto) {
    const res = await this.pokemonModel.create({
      ...createPokemonDto,
      created_at: new Date(),
    });
    return res;
  }

  // gets the damage delete when two pokemons fight
  async getDamage(attackerId: number, defenderId: number) {
    try {
      const attacker = await this.pokemonModel.findOne({id: attackerId});
      const defender = (await this.pokemonModel.findOne({id: defenderId}));
      const damage = (30 * (attacker!.attack/defender!.defense)) * this.getTypeModifier(attacker!, defender!);
      return damage;
    } catch (error) {
      console.error(error);
      throw new BadRequestException();
    }
  }

  async findAll(page = 1, perPage = 10) {
    const skip = (page - 1) * perPage;
    return await this.pokemonModel.find({}).skip(skip).limit(perPage);
  }

  findOne(id: number) {
    return this.pokemonModel.findOne({ id });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonModel.findOneAndUpdate(
      {
        id,
      },
      {
        ...updatePokemonDto,
        updated_at: new Date(),
      },
    );
  }

  remove(id: number) {
    return this.pokemonModel.findOneAndRemove({ id });
  }
}
