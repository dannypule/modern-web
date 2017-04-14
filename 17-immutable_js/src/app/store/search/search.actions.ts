import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/take';

import {createAction} from '../createAction';
import {AppState} from '../../models/appState';

@Injectable()
export class SearchActions {
    static PERFORM_SEARCH = 'PERFORM_SEARCH';
    static SEARCH_RESULT_RECEIVED = 'SEARCH_RESULT_RECEIVED';

    constructor(
        private store: Store<AppState>
    ) {
        
    }

    performSearch(searchText){
        this.store.dispatch(createAction(SearchActions.PERFORM_SEARCH, {
            searchText: searchText
        }))
    }
}