import { Server, AuthenticationOptions } from '../sdk';
import { Request, Response, NextFunction } from 'express';

export async function configureAuthentication(
  server: Server,
  options: AuthenticationOptions
) {
  if (!options.required) {
    return;
  }

  server.use(async (req: Request, res: Response, next: NextFunction) => {
    if (options.handler) {
      await options.handler(req, res, next);
    } else {
      next();
    }
  });
}