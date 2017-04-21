import { Action } from '@ngrx/store';

import { SearchActions } from './search.actions';
import { SearchQuery } from "app/models";

export function searchReducer(
    searchQuery: SearchQuery = {
        searchText: '',
        searchResult: { result: {}}
    },
    action: Action
): SearchQuery {
    switch (action.type) {
        case SearchActions.PERFORM_SEARCH:
            return Object.assign({}, searchQuery, {
                searchText: action.payload.searchText
            })
        case SearchActions.SEARCH_RESULT_RECEIVED:
            return Object.assign({}, searchQuery, {
                searchResult: action.payload.searchResult
            });
        default: 
            return searchQuery; // always return the current state by default!!
    }
}