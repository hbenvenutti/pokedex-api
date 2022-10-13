import { PrismaService } from 'src/database/prisma.service';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonRepository } from './Pokemon.repository';

// ---------------------------------------------------------------------------------------------- //

export class PrismaPokemonRepository implements PokemonRepository {
  private prisma = new PrismaService();

  async create(data: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.prisma.pokemon.create({
      data,
    });

    return pokemon as Pokemon;
  }

  async listByRegion(region: string): Promise<Pokemon[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: {
        region,
      },
    });

    return pokemons as Pokemon[];
  }
}

export const pokemonRepository = new PrismaPokemonRepository();
