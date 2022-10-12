export type EvYield = {
  amount: number;
  type: string;
};

export type Evolution = {
  pokemon_id: string;
  how: string;
};

export type Variation = {
  name: string;
  art: string;
};

export interface Pokemon {
  id?: string;
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
  specialDefense: number;
  abilities: string[];
  evYield: EvYield;
  entry: string;
  evolvesFrom: Evolution[];
  EvolvesTo: Evolution[];
  height: number;
  weight: number;
}
