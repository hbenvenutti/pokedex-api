import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { Pokemon } from '../entities/pokemon.entity';

export interface PokemonRepository {
  findByRegion(region: string): Promise<Pokemon[]>;
  create(pokemon: CreatePokemonDto): Promise<Pokemon>;

  findByFormId(formId: string): Promise<Pokemon | undefined>;
}
