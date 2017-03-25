import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
import { Observable } from "rxjs/Observable";

interface AppState {
  counter: number
}
 
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { 
    this.counter = store.select('counter');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({
      type: INCREMENT
    });
  }

  decrement(){
    this.store.dispatch({
      type: DECREMENT
    });
  }

  reset(){
    this.store.dispatch({
      type: RESET
    })
  }
}
