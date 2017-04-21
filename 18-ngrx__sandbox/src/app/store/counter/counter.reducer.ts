import { Action } from '@ngrx/store';

import { CounterActions } from './counter.actions';
import { Counter } from "app/models";

export function counterReducer(
    counter: Counter = { currentValue: 0 },
    action: Action
): Counter {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return setCounterCurrentValue(counter, counter.currentValue + 1);
        case CounterActions.DECREMENT:
            return setCounterCurrentValue(counter, counter.currentValue - 1);
        case CounterActions.RESET:
            return setCounterCurrentValue(counter, 0);
        case CounterActions.RESET_TO_ONE:
            return setCounterCurrentValue(counter, 1);
        default: 
            return counter; // always return the current state by default!!
    }
}

function setCounterCurrentValue(counter: Counter, currentValue: number): Counter {
    return Object.assign({}, counter, { currentValue });
}