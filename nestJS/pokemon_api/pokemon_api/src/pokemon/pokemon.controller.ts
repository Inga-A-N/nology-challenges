import {
  Body,
  Post,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
  Patch,
  Delete,
  HttpCode,
  UseFilters,
  Query,
} from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './entity/pokemon.entity';
import * as O from 'fp-ts/Option';
import { UpdatePokemonDTO } from './dtos/update-pokemon.dto';
import { UniqueConstraintFilter } from 'src/shared/filters/unique-constraint.filter';
import { FilterQueryDTO } from './dtos/filter-query.dto';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() data: CreatePokemonDTO): Promise<Pokemon> {
    return this.pokemonService.create(data);
  }

  @Get()
  findAll(@Query() queries: FilterQueryDTO): Promise<Pokemon[]> {
    if (Object.keys(queries).length === 0) {
      return this.pokemonService.findAll();
    }
    return this.pokemonService.findByQueries(queries);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pokemon> {
    const maybePokemon = await this.pokemonService.findById(id);
    // if (O.isNone(maybePokemon)){
    //     throw new NotFoundException("Pokemon not found" + id)
    // }
    // return maybePokemon.value

    return O.getOrElseW(() => {
      throw new NotFoundException('Pokemon not found ID: ' + id);
    })(maybePokemon);
  }

  //   UPDATE

  @Patch(':id')
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePokemonDTO,
  ): Promise<Pokemon> {
    const maybeUpdatedPokemon = await this.pokemonService.updateById(id, data);
    return O.getOrElseW(() => {
      throw new NotFoundException('Pokemon not found. ID: ' + id);
    })(maybeUpdatedPokemon);
  }

  // DELETE

  @Delete(':id')
  @HttpCode(204)
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const isDeleted = await this.pokemonService.deleteById(id);
    if (!isDeleted) {
      throw new NotFoundException(
        'Pokemon with ID ' + id + ' could not be deleted',
      );
    }
  }
}
