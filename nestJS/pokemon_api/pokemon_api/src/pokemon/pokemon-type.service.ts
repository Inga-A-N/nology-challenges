import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { PokemonType } from './entity/pokemon-type.entity';
import { EntityRepository } from '@mikro-orm/mysql';

@Injectable()
export class PokemonTypeService {
  constructor(
    @InjectRepository(PokemonType)
    private readonly pokemonTypeRepository: EntityRepository<PokemonType>,
  ) {}

  async findAllByIds(ids: number[]): Promise<PokemonType[]> {
    return this.pokemonTypeRepository.find({ id: { $in: ids } });
  }

  async findAll(): Promise<PokemonType[]> {
    return await this.pokemonTypeRepository.findAll();
  }

  async findOneByName(name: string) {
    return await this.pokemonTypeRepository.findOne({ name });
  }
}
