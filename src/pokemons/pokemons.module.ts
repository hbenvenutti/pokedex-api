import { Module } from '@nestjs/common';
import {
  EvolutionLinesRepositoryToken,
  PokemonRepositoryToken,
  PokemonsService,
  VariationsRepositoryToken,
} from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { PrismaPokemonRepository } from './repositories/PrismaPokemon.repository';
import { PrismaVariationsRepository } from './repositories/PrismaVariations.repository';
import { PrismaEvolutionLinesRepository } from './repositories/PrismaEvolutionLines.repository';

@Module({
  controllers: [PokemonsController],
  providers: [
    {
      provide: PokemonRepositoryToken,
      useValue: new PrismaPokemonRepository(),
    },
    {
      provide: VariationsRepositoryToken,
      useValue: new PrismaVariationsRepository(),
    },
    {
      provide: EvolutionLinesRepositoryToken,
      useValue: new PrismaEvolutionLinesRepository(),
    },
    PokemonsService,
  ],
})
export class PokemonsModule {}
