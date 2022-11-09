import { Variation } from '../entities/variation.entity';

export interface VariationsRepository {
  findByDexNumber(number: number): Promise<Variation[]>;
}
