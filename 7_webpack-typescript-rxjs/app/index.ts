import { ten } from './module';
import * as Rx from 'rxjs/Rx';

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

let thing: any = document.getElementById('thing');
let mousemove = Rx.Observable.fromEvent(document.body, 'mousemove');
mousemove.subscribe((e: any)=>{
    let el = document.createElement('span');
    el.classList.add('thing');
    el.style.top = e.y + 'px';
    el.style.left = e.x + 'px';
    console.log(e.y);
    document.body.appendChild(el);
});