import { NestFactory } from '@nestjs/core';
import { PokemonsModule } from './pokemons/pokemons.module';

async function bootstrap() {
  const app = await NestFactory.create(PokemonsModule);

  // process.env.NODE_ENV !== 'dev' &&
  //   app.enableCors({
  //     origin: 'https://charming-gnome-078968.netlify.app/',
  //   });

  await app.listen(3000, () => {
    console.log('Listening at http://localhost:3000');
  });
}

bootstrap();
