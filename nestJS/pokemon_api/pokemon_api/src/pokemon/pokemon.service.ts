import { Injectable } from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';

@Injectable()
export class PokemonService {
  create(data: CreatePokemonDTO) {
    console.log('in service layer', data);
    return 'The Pokemon service creates a pokemon';
  }
}