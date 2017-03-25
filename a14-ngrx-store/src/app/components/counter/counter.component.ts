import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

import { CounterService } from '../../services';
import { CounterActions } from '../../store/counter/counter.actions';
import { AppState, Counter } from "app/models";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public currentValue$: Observable<number>; // observable version
  public currentValue: number;

  constructor(
    private counterService: CounterService,
    public actions: CounterActions,
    private _store: Store<AppState>
  ) {
    this.currentValue$ = this.counterService.getCurrentValue(); // get initial value with an Observable magic way

    // get initial value in a more explicit way but not the best because it subscribes to whole state
    _store.subscribe(state => {
      // this.currentValue = state.counter.currentValue; 
    });

    // get initial value by selecting 'counter' from the current state
    _store.select('counter').subscribe((counter: Counter) => {
      // this.currentValue = counter.currentValue; 
    });

    // get initial value by selecting 'counter' from the current state
    _store.select('counter', 'currentValue').subscribe((currentValue: number) => {
      console.log(currentValue);
      this.currentValue = currentValue; 
    });
  }

  ngOnInit() {

  }

  // increment() {

  // }

  // decrement(){

  // }

  // reset(){

  // }
}
