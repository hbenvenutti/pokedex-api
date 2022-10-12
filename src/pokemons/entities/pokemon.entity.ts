export type EvYield = {
  amount: number;
  type: string;
};

export type Evolution = {
  pokemon_id: string;
  how: string;
};

export interface Pokemon {
  id: string;
  dexNumber: number;
  name: string;
  species: string;
  types: string[];
  art: string;
  hp: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
  abilities: string[];
  evYield: EvYield;
  entry: string;
  evolvesFrom: Evolution[];
  EvolvesTo: Evolution[];
  height: number;
  weight: number;
}
