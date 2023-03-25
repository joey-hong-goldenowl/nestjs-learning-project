import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('forbidden')
  getForbidden() {
    throw new HttpException({
      description: 'error?',
      errorCode: HttpStatus.FORBIDDEN,
    }, HttpStatus.FORBIDDEN)
  }
}
