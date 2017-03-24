import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { store } from '../../app.module';

import {INCREMENT, DECREMENT, RESET} from './counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: Observable<number>;

  constructor(

  ) {

  }

  ngOnInit() {
  }

  increment() {
    store.dispatch({ type: INCREMENT });
  }

  decrement() {
    store.dispatch({ type: DECREMENT });
  }

  reset() {
    store.dispatch({ type: RESET });
  }
}
