import { Module } from '@nestjs/common';
import { PokemonRepositoryToken, PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { PrismaPokemonRepository } from './repositories/PrismaPokemon.repository';

@Module({
  controllers: [PokemonsController],
  providers: [
    {
      provide: 'PokemonRepository',
      useValue: new PrismaPokemonRepository(),
    },
    PokemonsService,
  ],
})
export class PokemonsModule {}
