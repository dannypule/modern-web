"use strict";

import { ten } from './module';

class Animal {
    private _weight: number;

    constructor(
        private name: string,
        private owner: string
    ) {

    }

    getInfo() {
        document.write(`
            ${this.name} belongs to ${this.owner}. <br/> 
        `);
    }

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}

let dog = new Animal('Pogo', 'Jim');
dog.getInfo();

dog.weight = ten;
let weight = dog.weight;

document.write(`
    Weight is ${weight}. <br/>
`);