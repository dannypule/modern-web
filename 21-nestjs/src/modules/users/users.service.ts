import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Component()
export class UsersService {
    id = 3;
    private users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Alice Caeiro" },
        { id: 3, name: "Who Knows" },
    ];

    getAllUsers() {
        return Promise.resolve(this.users);
    }
    getUser(id: number) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new HttpException("User not found", 404);
        }
        return Promise.resolve(user);
    }
    addUser(user) {
        user.id = ++this.id;
        this.users.push(user);
        return Promise.resolve({
            message: "User has been added.",
            user
        });
    }
}