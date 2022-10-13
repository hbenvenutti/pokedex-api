import { PrismaService } from 'src/database/prisma.service';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonRepository } from './Pokemon.repository';

// ---------------------------------------------------------------------------------------------- //

export class PrismaPokemonRepository implements PokemonRepository {
  private repository = new PrismaService().pokemon;
  private prisma = new PrismaService();

  async create(data: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.repository.create({
      data,
    });

    return pokemon as Pokemon;
  }

  // -------------------------------------------------------------------------------------------- //

  async findByRegion(region: string): Promise<Pokemon[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: {
        region,
      },
    });

    return pokemons as Pokemon[];
  }

  // -------------------------------------------------------------------------------------------- //

  async findByFormId(formId: string): Promise<Pokemon | undefined> {
    const pokemon = (await this.repository.findUnique({ where: { formId } })) as Pokemon;

    return pokemon;
  }
}

export const pokemonRepository = new PrismaPokemonRepository();
