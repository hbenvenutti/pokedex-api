import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { Pokemon } from '../entities/pokemon.entity';

export interface PokemonRepository {
  listByRegion(region: string): Promise<Pokemon[]>;
  create(pokemon: CreatePokemonDto): Promise<Pokemon>;
}
