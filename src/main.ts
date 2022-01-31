import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger } from '@nestjs/common';
import {MicroserviceOptions,Transport} from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // const server = config.get('server')
  // console.log( server);
  // await app.listen(server.port);
  // Logger.log(`Application start on port ${server.port}`)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport:Transport.TCP,
    options:{
      host:'127.0.0.1',
      port: 8003
    }

  });
  app.listen().then(()=>{
    Logger.log('Microservice listen on TCP')
  })
}
bootstrap();
