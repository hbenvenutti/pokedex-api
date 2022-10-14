import { Inject, Injectable } from '@nestjs/common';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonRepository } from './repositories/Pokemon.repository';

// ---------------------------------------------------------------------------------------------- //

export const PokemonRepositoryToken = Symbol('PokemonRepositoryToken');

// ---------------------------------------------------------------------------------------------- //

@Injectable()
export class PokemonsService {
  constructor(
    @Inject(PokemonRepositoryToken)
    private pokemonRepository: PokemonRepository,
  ) {}

  async create(data: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findByFormId(data.formId);

    if (pokemon) {
      throw new Error();
    }

    return this.pokemonRepository.create(data);
  }

  async list(region = 'kanto') {
    const pokemons = await this.pokemonRepository.findByRegion(region);

    return pokemons;
  }

  async findSpecies(search: string): Promise<Pokemon[]> {
    const pokemon = isNaN(+search)
      ? await this.pokemonRepository.findByName(search.toLowerCase())
      : await this.pokemonRepository.findByDexNumber(+search);

    if (pokemon) {
      return this.pokemonRepository.listSpecies(pokemon.species);
    }

    console.log('not in if');
    return [];
  }

  findPokemon(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
