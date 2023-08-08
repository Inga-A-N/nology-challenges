import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { plainToInstance } from 'class-transformer';
import { Pokemon } from './entity/pokemon.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import * as O from 'fp-ts/Option';
import { Option } from 'fp-ts/Option';
import { UpdatePokemonDTO } from './dtos/update-pokemon.dto';
import { wrap } from '@mikro-orm/core';
import { PokemonTypeService } from './pokemon-type.service';
import { FilterQueryDTO } from './dtos/filter-query.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly prokemonRepository: EntityRepository<Pokemon>,
    private readonly pokemonTypeService: PokemonTypeService,
  ) {}

  async create(data: CreatePokemonDTO): Promise<Pokemon> {
    const { pokemonTypeIds, ...rest } = data;
    const newPokemon = plainToInstance(Pokemon, rest);
    newPokemon.level = 1;
    const pokemonTypes = await this.pokemonTypeService.findAllByIds(
      pokemonTypeIds,
    );
    newPokemon.types.add(pokemonTypes);

    await this.prokemonRepository
      .getEntityManager()
      .persistAndFlush(newPokemon);
    return newPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.prokemonRepository.findAll({ populate: ['types'] });
  }

  async findById(id: number): Promise<Option<Pokemon>> {
    const result = await this.prokemonRepository.findOne(
      { id },
      { populate: ['types'] },
    );
    return O.fromNullable(result);
  }

  async findByQueries(queries: FilterQueryDTO): Promise<Pokemon[]> {
    const { type, minHp = 5 } = queries;

    if (!type) {
      return await this.prokemonRepository.find({ hp: { $gte: minHp } });
    }

    const pokemonType = await this.pokemonTypeService.findOneByName(type);
    if (!pokemonType) return [];

    return await this.prokemonRepository.find({
      $and: [{ types: pokemonType }, { hp: { $gte: minHp } }],
    });
  }

  async updateById(
    id: number,
    data: UpdatePokemonDTO,
  ): Promise<Option<Pokemon>> {
    const result = await this.findById(id);
    if (O.isNone(result)) {
      return result;
    }
    const pokemon = result.value;
    wrap(pokemon).assign(data);
    await this.prokemonRepository.getEntityManager().flush();
    return O.fromNullable(pokemon);
  }

  async deleteById(id: number): Promise<boolean> {
    const result = await this.findById(id);
    if (O.isNone(result)) {
      return false;
    }
    await this.prokemonRepository.nativeDelete(result.value);
    return true;
  }
}
