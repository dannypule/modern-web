import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CounterService} from '../../services';
import {CounterActions} from '../../store/counter/counter.actions';
 
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public currentValue$: Observable<number>;

  constructor(
    private counterService: CounterService,
    public actions: CounterActions
  ) { 
    this.currentValue$ = counterService.getCurrentValue();
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
