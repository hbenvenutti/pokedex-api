export type Evolution = {
  pokemonId: string;
  how: string;
  art: string;
};

export interface EvolutionLine {
  id: string;
  species: string;
  babyStage: Evolution[];
  firstStage: Evolution[];
  secondStage: Evolution[];
  thirdStage: Evolution[];
}
