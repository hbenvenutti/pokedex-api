import { EvolutionLine } from '../entities/evolutionLine.entity';

export interface EvolutionLinesRepository {
  findBySpecies(species: string): Promise<EvolutionLine | undefined>;
}
