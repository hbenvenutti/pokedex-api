import { Inject, Injectable } from '@nestjs/common';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { EvolutionLinesRepository } from './repositories/EvolutionLines.repository';
import { PokemonRepository } from './repositories/Pokemon.repository';
import { VariationsRepository } from './repositories/Variations.repository';

// ---------------------------------------------------------------------------------------------- //

export const PokemonRepositoryToken = Symbol('PokemonRepositoryToken');
export const VariationsRepositoryToken = Symbol('VariationsRepositoryToken');
export const EvolutionLinesRepositoryToken = Symbol('VariationsRepositoryToken');

// ---------------------------------------------------------------------------------------------- //

@Injectable()
export class PokemonsService {
  constructor(
    @Inject(PokemonRepositoryToken)
    private pokemonRepository: PokemonRepository,

    @Inject(VariationsRepositoryToken)
    private variationsRepository: VariationsRepository,

    @Inject(EvolutionLinesRepositoryToken)
    private evolutionLinesRepository: EvolutionLinesRepository,
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

    return [];
  }

  async findOnePokemon(id: string) {
    const pokemon = await this.pokemonRepository.findByFormId(id);
    const variations = await this.variationsRepository.findByDexNumber(pokemon.dexNumber);
    const evolutionLine = await this.evolutionLinesRepository.findBySpecies(pokemon.species);

    return { pokemon, variations, evolutionLine };
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
