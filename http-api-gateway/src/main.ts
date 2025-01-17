import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () =>
    console.log('Server is running and listening on port ' + PORT + '!'),
  );
}
bootstrap();
