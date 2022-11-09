import { PrismaService } from 'src/database/prisma.service';
import { Variation } from '../entities/variation.entity';
import { VariationsRepository } from './Variations.repository';

export class PrismaVariationsRepository implements VariationsRepository {
  private repository = new PrismaService().variation;

  async findByDexNumber(dexNumber: number): Promise<Variation[]> {
    const variations = await this.repository.findMany({
      where: { dexNumber },
      orderBy: { type: 'asc' },
    });

    return variations;
  }
}
