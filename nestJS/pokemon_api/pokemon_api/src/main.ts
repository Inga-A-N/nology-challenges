import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UniqueConstraintFilter } from './shared/filters/unique-constraint.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new UniqueConstraintFilter());
  await app.listen(3000);
}
bootstrap();
