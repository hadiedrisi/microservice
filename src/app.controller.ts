import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern,Payload} from '@nestjs/microservices'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService){}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern({cmd:'add'})
  async add(){
    console.log('Recieved message')
      return 0;
  }
  @MessagePattern({ cmd: 'sum' })
  async accumulate(@Payload() data: number[]): Promise<number> {
    console.log('Recieved message')
    return (data || []).reduce((a, b) => a + b);
  }
}
