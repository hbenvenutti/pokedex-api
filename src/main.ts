import { NestFactory } from '@nestjs/core';
import { PokemonsModule } from './pokemons/pokemons.module';

async function bootstrap() {
  const app = await NestFactory.create(PokemonsModule);

  process.env.NODE_ENV !== 'dev' &&
    app.enableCors({
      origin: 'https://charming-gnome-078968.netlify.app/',
    });

  await app.listen(process.env.PORT || 3000, () => {
    process.env.NODE_ENV === 'dev' &&
      console.log(`Listening at http://localhost:${process.env.PORT}`);
  });
}

bootstrap();
