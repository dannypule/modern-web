import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Effect, Actions, toPayload } from "@ngrx/effects";

import { CounterActions } from "../counter/counter.actions";

@Injectable()
export class MainEffects {
    constructor(
        private action$: Actions
    ) {

    }

    @Effect() update$ = this.action$
        .ofType('SUPER_SIMPLE_EFFECT')
        .switchMap(() => 
            Observable.of({
                type: 'SUPER_SIMPLE_EFFECT_HAS_FINISHED'
            })
        );

    @Effect() resetToOne$ = this.action$
        .ofType(CounterActions.RESET)
        .switchMap(() => 
            Observable.of({
                type: CounterActions.RESET_TO_ONE
            })
        );
}
