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

    ///////////////////////////////////////////////////////////////////
    // Below are FOUR ways of doing pretty much the same thing
    //================================================================

    ///// 1 - get initial value with an Observable magic way
    this.currentValue$ = this.counterService.getCurrentValue();

    ///// 2 - get initial value in a more explicit way but not the best because it subscribes to whole state
    // this.counterService.selectAppState().subscribe(appState => this.currentValue = appState.counter.currentValue);

    ///// 3 - get initial value by selecting 'counter' from the current state
    // this.counterService.selectCounter().subscribe(counter => this.currentValue = counter.currentValue);

    ///// 4 - get initial value by selecting 'counter' from the current state
    this.counterService.selectCurrentValue().subscribe(currentValue => this.currentValue = currentValue);
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
