import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração de CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Permite requisições apenas do front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true, // Permite enviar cookies e cabeçalhos de autorização
  });

  // Configuração do Logger
  const logger = new Logger('Bootstrap');
  logger.log('Aplicação inicializada na porta 3001');

  await app.listen(3001);
}
bootstrap();
