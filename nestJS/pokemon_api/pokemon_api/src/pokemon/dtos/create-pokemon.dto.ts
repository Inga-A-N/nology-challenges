import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    Min,
    MinLength,
  } from 'class-validator';
  
  
  enum PokemonType {
    FIRE = 'fire',
    WATER = 'water',
    GRASS = 'grass',
    ELECTRIC = 'electric',
    ICE = 'ice',
    FIGHTING = 'fighting',
    POISON = 'poison',
    GROUND = 'ground',
    FLYING = 'flying',
    PSYCHIC = 'pyschic',
    BUG = 'bug',
    ROCK = 'rock',
    GHOST = 'ghost',
    DARK = 'dark',
    DRAGON = 'dragon',
    STEEL = 'steel',
    FAIRY = 'fairy',
  }
  export class CreatePokemonDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    name: string;
  
    @IsEnum(PokemonType)
    type: string;
  
    @IsNumber()
    @Min(5)
    hp: number;
  
    @IsUrl()
    imageLink: string;
  
    @IsOptional()
    @IsNumber()
    @Min(1)
    evolutionId: number;
  }

  /* -   [Normal](https://pokemon.fandom.com/wiki/Normal_type "Normal type")
  -   [Fire](https://pokemon.fandom.com/wiki/Fire_type "Fire type")
  -   [Water](https://pokemon.fandom.com/wiki/Water_type "Water type")
  -   [Grass](https://pokemon.fandom.com/wiki/Grass_type "Grass type")
  -   [Electric](https://pokemon.fandom.com/wiki/Electric_type "Electric type")
  -   [Ice](https://pokemon.fandom.com/wiki/Ice_type "Ice type")
  -   [Fighting](https://pokemon.fandom.com/wiki/Fighting_type "Fighting type")
  -   [Poison](https://pokemon.fandom.com/wiki/Poison_type "Poison type")
  -   [Ground](https://pokemon.fandom.com/wiki/Ground_type "Ground type")
  -   [Flying](https://pokemon.fandom.com/wiki/Flying_type "Flying type")
  -   [Psychic](https://pokemon.fandom.com/wiki/Psychic_type "Psychic type")
  -   [Bug](https://pokemon.fandom.com/wiki/Bug_type "Bug type")
  -   [Rock](https://pokemon.fandom.com/wiki/Rock_type "Rock type")
  -   [Ghost](https://pokemon.fandom.com/wiki/Ghost_type "Ghost type")
  -   [Dark](https://pokemon.fandom.com/wiki/Dark_type "Dark type")
  -   [Dragon](https://pokemon.fandom.com/wiki/Dragon_type "Dragon type")
  -   [Steel](https://pokemon.fandom.com/wiki/Steel_type "Steel type")
  -   [Fairy](https://pokemon.fandom.com/wiki/Fairy_type "Fairy type")
  
  */