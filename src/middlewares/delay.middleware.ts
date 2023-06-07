import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class DelayMiddleware implements NestMiddleware {
  async use(_req: any, _res: any, next: () => void) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    next();
  }
}
