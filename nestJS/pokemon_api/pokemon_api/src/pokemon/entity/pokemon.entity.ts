import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

import { PokemonType } from './pokemon-type.entity';

@Entity()
export class Pokemon {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  name: string;

  @ManyToMany(() => PokemonType, (type) => type.pokemon)
  types = new Collection<PokemonType>(this);

  @Property()
  hp: number;
  @Property()
  imageLink: string;
  @Property({ nullable: true })
  evolutionId: number;
  @Property()
  level: number;
}
