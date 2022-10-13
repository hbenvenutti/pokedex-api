import { Inject, Injectable } from '@nestjs/common';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PokemonRepository } from './repositories/Pokemon.repository';

// ---------------------------------------------------------------------------------------------- //

export const PokemonsRepositoryToken = Symbol('PokemonsRepository');

// ---------------------------------------------------------------------------------------------- //

@Injectable()
export class PokemonsService {
  constructor(@Inject(PokemonsRepositoryToken) private pokemonsRepository: PokemonRepository) {}

  create(createPokemonDto: CreatePokemonDto) {
    return 'This action adds a new pokemon';
  }

  async list(region = 'kanto') {
    const pokemons = await this.pokemonsRepository.listByRegion(region);

    return pokemons;
    // return `This action returns all pokemons`;
  }

  findSpecies(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
