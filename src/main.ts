import { NestFactory } from '@nestjs/core';
import { PokemonsModule } from './pokemons/pokemons.module';

async function bootstrap() {
  const app = await NestFactory.create(PokemonsModule);
  await app.listen(3000, () => {
    console.log('Listening at http://localhost:3000');
  });
}
bootstrap();
