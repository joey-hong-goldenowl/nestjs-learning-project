import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: Error) => void) {
    console.log('Request', req.method, req.url);
    next();
  }
}