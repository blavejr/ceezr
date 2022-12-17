import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema()
export class Pokemon {
    @Prop()
    id: number;
    @Prop()
    name: string;
    @Prop()
    type_1: string;
    @Prop()
    type_2: string;
    @Prop()
    total: number;
    @Prop()
    hP: number;
    @Prop()
    attack: number;
    @Prop()
    defense: number;
    @Prop()
    sp_Atk: number;
    @Prop()
    sp_Def: number;
    @Prop()
    speed: number;
    @Prop()
    generation: number;
    @Prop()
    legendary: boolean;
    @Prop()
    created_at: Date;
    @Prop()
    updated_at: Date;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);