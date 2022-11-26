import { Injectable } from '@nestjs/common';

type HelloWordProps = {
  message: string
}

@Injectable()
export class AppService {
  getHelloWord(): HelloWordProps {
    return { message: "Hello Word" };
  }
}
