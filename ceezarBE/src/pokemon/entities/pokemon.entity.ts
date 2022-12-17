import { ApiProperty } from "@nestjs/swagger";

export class PokemonEntity {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    type_1: string;
    @ApiProperty()
    type_2: string;
    @ApiProperty()
    total: number;
    @ApiProperty()
    hP: number;
    @ApiProperty()
    attack: number;
    @ApiProperty()
    defense: number;
    @ApiProperty()
    sp_Atk: number;
    @ApiProperty()
    sp_Def: number;
    @ApiProperty()
    speed: number;
    @ApiProperty()
    generation: number;
    @ApiProperty()
    legendary: boolean;
    @ApiProperty()
    created_at: Date;

    constructor(data: Partial<PokemonEntity>){
        Object.assign(this, data)
    }

  }
  