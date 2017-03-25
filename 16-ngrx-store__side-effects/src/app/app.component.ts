import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Counter } from './models/counter';
import { CounterService } from './services/counter.service';
import { CounterActions } from './store/counter/counter.actions';
import { SearchActions } from "app/store/search/search.actions";
import { SearchQuery, AppState } from "app/models";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<Counter>;
  searchQuery: SearchQuery;

  constructor(
    private counterService: CounterService,
    public actions: CounterActions,
    public searchActions: SearchActions,
    private store: Store<AppState>
  ) {
    this.counter$ = counterService.getCounter();
    this.store.select('searchQuery').subscribe((searchQuery: SearchQuery) => {
      this.searchQuery = searchQuery;
    })
  }
}
