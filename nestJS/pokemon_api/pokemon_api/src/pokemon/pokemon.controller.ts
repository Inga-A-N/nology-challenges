import { Body, Post, Controller} from "@nestjs/common"
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { PokemonService } from './pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() data: CreatePokemonDTO) {
    return this.pokemonService.create(data);
  }
}