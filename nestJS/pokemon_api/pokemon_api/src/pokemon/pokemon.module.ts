import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Pokemon } from './entity/pokemon.entity';
import { PokemonType } from './entity/pokemon-type.entity';
import { PokemonTypeController } from './pokemon-type.controller';
import { PokemonTypeService } from './pokemon-type.service';

@Module({
  imports: [MikroOrmModule.forFeature([Pokemon, PokemonType])],
  controllers: [PokemonTypeController, PokemonController],
  providers: [PokemonService, PokemonTypeService],
})
export class PokemonModule {}
