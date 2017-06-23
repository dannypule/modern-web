import { HttpException } from '@nestjs/core';
import { Middleware, NestMiddleware, HttpStatus } from '@nestjs/common';
import { UsersService } from "../modules/users/users.service";

@Middleware()
export class LoggingMiddleware implements NestMiddleware {
    constructor(private usersService: UsersService) {}
    
    resolve(): (req, res, next) => void {
        return async (req, res, next) => {
            
            // const userName = req.headers["x-access-header"];
            // const users = await this.usersService.getAllUsers();

            // const user = users.find(user => user.name === userName);
            // console.log(user);
            // if(!user) {
            //     throw new HttpException('User not found.', 401);
            // }
            // req.user = user;
            // res.status(HttpStatus.OK).json(user); // this middleware has no effect until this is commented out
            next();
        }
    }
}