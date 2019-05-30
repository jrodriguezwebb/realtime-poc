import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import { cors } from './cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors);
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000);
}
bootstrap();
