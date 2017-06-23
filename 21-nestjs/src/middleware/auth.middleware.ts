import { Middleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    constructor() {}
    
    resolve(roles: string[], options: object): (req, res, next) => void {
        return async (req, res, next) => {
            console.log(roles);
            next();
        }
    }
}