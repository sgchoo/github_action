import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async test() {
    return 'test';
  }

  @Get('/test/test123')
  async actionTest() {
    return 'github test';
  }

  @Get('/test/test224')
  async actionTest2() {
    return 'github test2';
  } 
}
