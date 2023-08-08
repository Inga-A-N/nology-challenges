import {PartialType} from '@nestjs/mapped-types';
import { CreatePokemonDTO } from './create-pokemon.dto';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdatePokemonDTO extends PartialType(CreatePokemonDTO){
    @IsOptional()
    @IsNumber()
    @Min(2)
    level: number;
}