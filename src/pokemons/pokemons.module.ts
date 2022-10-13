import { Module } from '@nestjs/common';
import { PokemonsRepositoryToken, PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { PrismaPokemonRepository } from './repositories/PrismaPokemon.repository';

@Module({
  controllers: [PokemonsController],
  providers: [
    { provide: PokemonsRepositoryToken, useValue: PrismaPokemonRepository },
    PokemonsService,
  ],
})
export class PokemonsModule {}
