import { PrismaService } from 'src/database/prisma.service';
import { EvolutionLine } from '../entities/evolutionLine.entity';
import { EvolutionLinesRepository } from './EvolutionLines.repository';

export class PrismaEvolutionLinesRepository implements EvolutionLinesRepository {
  private repository = new PrismaService().evolutionLine;

  async findBySpecies(species: string): Promise<EvolutionLine> {
    const evolutionLine = (await this.repository.findUnique({
      where: { species },
    })) as EvolutionLine;

    return evolutionLine;
  }
}
