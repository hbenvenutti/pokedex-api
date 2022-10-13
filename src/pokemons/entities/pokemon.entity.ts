export type EvYield = {
  amount: number;
  type: string;
};

export type Evolution = {
  pokemonId: string;
  how: string;
};

export type Variation = {
  name: string;
  art: string;
};

export enum Region {
  kanto = 'kanto',
  johto = 'johto',
  hoenn = 'hoenn',
  sinnoh = 'sinnoh',
  unova = 'unova',
  kalos = 'kalos',
  alola = 'alola',
  galar = 'galar',
}

export interface Pokemon {
  id: string;
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
  evYield: EvYield[];
  entry: string;

  evolvesFrom: Evolution[];
  evolvesTo: Evolution[];

  height: string;
  weight: string;
}
