import { Inject, Injectable } from '@nestjs/common';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PokemonRepository } from './repositories/Pokemon.repository';

// ---------------------------------------------------------------------------------------------- //

export const PokemonRepositoryToken = Symbol('PokemonRepositoryToken');

// ---------------------------------------------------------------------------------------------- //

@Injectable()
export class PokemonsService {
  constructor(
    @Inject('PokemonRepository')
    private pokemonRepository: PokemonRepository,
  ) {}

  create(createPokemonDto: CreatePokemonDto) {
    return 'This action adds a new pokemon';
  }

  async list(region = 'kanto') {
    const pokemons = await this.pokemonRepository.listByRegion(region);

    return pokemons;
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
