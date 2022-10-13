import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';

import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon, Region } from './entities/pokemon.entity';

// ---------------------------------------------------------------------------------------------- //

interface ListQuery {
  region: string;
}

// ---------------------------------------------------------------------------------------------- //

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Get()
  list(@Query() query: ListQuery): Promise<Pokemon[]> {
    const { region } = query;

    if (Object.keys(Region).includes(region)) {
      return this.pokemonsService.list(region);
    }

    return this.pokemonsService.list();
  }

  @Get(':id')
  findSpecies(@Param('id') id: string) {
    return this.pokemonsService.findSpecies(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonsService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonsService.remove(+id);
  }
}
