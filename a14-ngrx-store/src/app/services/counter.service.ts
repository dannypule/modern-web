import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

import { AppState } from '../models';
import { Counter } from "app/models/counter";

@Injectable()

export class CounterService {

    constructor(
        private store: Store<AppState>
    ) {

    }

    ///////////////////////////////////////////////////////////////////
    // Below are FOUR ways of doing pretty much the same thing
    //================================================================

    getCurrentValue(): Observable<number> {
        return this.store.select('counter', 'currentValue');
    }

    selectAppState(): Observable<AppState> {
        // get initial value in a more explicit way but not the best because it subscribes to whole state
        return this.store;
    }

    selectCounter(): Observable<Counter> {
        // get initial value by selecting 'counter' from the current state
        return this.store.select('counter');
    }

    selectCurrentValue(): Observable<number> {
        // get initial value by selecting 'counter' then 'currentValue' from the current state -- like a database!! 
        return this.store.select('counter', 'currentValue');
    }

}