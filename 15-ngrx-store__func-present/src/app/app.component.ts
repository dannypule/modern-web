import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {Counter} from './models/counter';
import {CounterService} from './services/counter.service';
import {CounterActions} from './store/counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<Counter>;

  constructor(
    private counterService: CounterService,
    public actions: CounterActions
  ) {
    this.counter$ = counterService.getCounter();
  }
}
