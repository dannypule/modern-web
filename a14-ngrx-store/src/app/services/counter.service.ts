import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

import { AppState } from '../models';

@Injectable()

export class CounterService {

    constructor(
        private store: Store<AppState>
    ) {

    }

    getCurrentValue(): Observable<number> {
        // return this.store.select(appState => appState.counter.currentValue)
        //         .filter(Boolean);
        // return this.store.select(appState => appState.counter.currentValue)
        return this.store.select('counter', 'currentValue');
    }

}