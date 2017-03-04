import * as Rx from 'rxjs/Rx';

let canDraw: boolean = false;
let draw: any = (x: number, y: number):void => {
    let el = document.createElement('span');
        el.classList.add('dot');
        el.style.top = y + 'px';
        el.style.left = x + 'px';
        document.body.appendChild(el);
};
let thing: any = document.getElementById('dot');
let mousemove = Rx.Observable.fromEvent(document.body, 'mousemove');
let mousedown = Rx.Observable.fromEvent(document.body, 'mousedown');
let mouseup = Rx.Observable.fromEvent(document.body, 'mouseup');
mousemove.subscribe((e: any) => {
    if (canDraw) {
        draw(e.x, e.y);
    }
});
mousedown.subscribe((e: any) => {
    canDraw = true;
    draw(e.x, e.y);
});
mouseup.subscribe((e: any) => {
    canDraw = false;
});

