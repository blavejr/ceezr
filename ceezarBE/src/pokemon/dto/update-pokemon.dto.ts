// import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { PartialType } from "@nestjs/swagger";

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
