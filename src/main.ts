import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { errorMorgan, successMorgan } from './middlewares/morgan.middleware';

async function bootstrap() {
  const logger = new Logger(AppModule.name);
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        return new BadRequestException(
          errors.map((error) => ({
            property: error.property,
            messages: Object.values(error.constraints),
          })),
        );
      },
    }),
  );
  app.use(successMorgan(logger));
  app.use(errorMorgan(logger));

  const port = configService.get('app.port');
  logger.log(`Server running on http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
