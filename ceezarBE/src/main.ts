import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { writeFileSync } from 'fs';

const addSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Pokemon Ceezr')
    .setDescription('The Ceezr pokemon API description')
    .setVersion('1.0')
    .addBasicAuth({type:'http'}, 'basic')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('./openapi.json', JSON.stringify(document, null, 2));
  SwaggerModule.setup('api', app, document);
};

(async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  addSwagger(app);
  await app.listen(3000);
})();
