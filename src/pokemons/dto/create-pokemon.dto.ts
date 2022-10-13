import { Evolution, EvYield, Variation } from '../entities/pokemon.entity';

export class CreatePokemonDto {
  dexNumber: number;
  formId: string;
  variations: Variation[];
  name: string;
  region: string;
  species: string;
  types: string[];
  art: string;
  hp: number;
  speed: number;
  specialAttack: number;
  attack: number;
  specialDefense: number;
  defense: number;
  abilities: string[];
  evYield: EvYield;
  entry: string;
  evolvesFrom: Evolution[];
  evolvesTo: Evolution[];
  height: number;
  weight: number;
}
