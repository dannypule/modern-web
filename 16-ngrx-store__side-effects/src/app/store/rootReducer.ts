import { counterReducer } from './counter/counter.reducer';
import { searchReducer } from './search/search.reducer';

export const rootReducer = {
    counter: counterReducer,
    searchQuery: searchReducer
};