import { PrismaService } from 'src/database/prisma.service';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonRepository } from './Pokemon.repository';

// ---------------------------------------------------------------------------------------------- //

export class PrismaPokemonRepository implements PokemonRepository {
  private repository = new PrismaService().pokemon;
  // private prisma = new PrismaService();

  async create(data: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.repository.create({
      data,
    });

    return pokemon as Pokemon;
  }

  // -------------------------------------------------------------------------------------------- //

  async findByRegion(region: string): Promise<Pokemon[]> {
    const pokemons = await this.repository.findMany({
      where: {
        region,
      },
      orderBy: { dexNumber: 'asc' },
    });

    return pokemons as Pokemon[];
  }

  // -------------------------------------------------------------------------------------------- //

  async findByFormId(formId: string): Promise<Pokemon | undefined> {
    const pokemon = (await this.repository.findUnique({ where: { formId } })) as Pokemon;

    return pokemon;
  }

  async findByName(name: string): Promise<Pokemon | undefined> {
    const pokemon = (await this.repository.findFirst({ where: { name } })) as Pokemon;

    return pokemon;
  }

  async findByDexNumber(dexNumber: number): Promise<Pokemon | undefined> {
    const pokemon = (await this.repository.findFirst({ where: { dexNumber } })) as Pokemon;

    return pokemon;
  }

  async listSpecies(species: string): Promise<Pokemon[]> {
    const pokemons = await this.repository.findMany({
      where: {
        species,
      },
      orderBy: { dexNumber: 'asc' },
    });

    return pokemons as Pokemon[];
  }
}

export const pokemonRepository = new PrismaPokemonRepository();
