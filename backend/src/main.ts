// registers aliases, DON'T REMOVE THIS LINE!
import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import RedisIoAdapter from '@adapters/redis-io.adapter';
import AppModule from './components/app/app.module';
import AppService from './components/app/app.service';
import AllExceptionsFilter from './filters/all-exceptions.filter';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule, { cors: true });
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors({
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  const appService = app.get<AppService>('AppService');
  const port: number = appService.getPort();
  const options = new DocumentBuilder()
    .setTitle('Api v1')
    .setDescription('The currencies API')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    console.log(`The server is running on ${port} port: ${appService.getBaseUrl()}/api`);
  });
}
bootstrap();
