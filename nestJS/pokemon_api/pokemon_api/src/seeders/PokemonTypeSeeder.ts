import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PokemonType } from '../pokemon/entity/pokemon-type.entity';

const pokemonTypes = [
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'pyschic',
  'bug',
  'rock',
  'ghost',
  'dark',
  'dragon',
  'steel',
  'fairy',
];
export class PokemonTypeSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    pokemonTypes.forEach((type) => em.create(PokemonType, { name: type }));
  }
}
