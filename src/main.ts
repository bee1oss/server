import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Set the global prefix to 'api'
  app.setGlobalPrefix('api')
	app.enableCors()
  
	await app.listen(4200)

}
bootstrap();