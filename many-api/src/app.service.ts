import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {firstTry: string, secondTry: string } {
    return { firstTry: 'Hello!', secondTry: 'I dont' };
  }
}
