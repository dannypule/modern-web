import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from "./users.service";
import { Res, Param, Body, UsePipes } from '@nestjs/common';
import { JoiValidatorPipe } from "./joi-validator.pipe";
import { userSchema } from "./user.schema";
import { UserDto } from "./user.dto";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) { }

    @Get()
    public async getAllUsers( @Res() res) {
        const users = await this.usersService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get()
    public async getUser( @Res() res, @Param('id') id) {
        const user = await this.usersService.getUser(+id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    @UsePipes(new JoiValidatorPipe(userSchema))
    public async addUser( @Res() res: Response, @Body('user') user: UserDto) {
        const msg = await this.usersService.addUser(user)
        res.status(HttpStatus.CREATED).json(msg);
    }
}