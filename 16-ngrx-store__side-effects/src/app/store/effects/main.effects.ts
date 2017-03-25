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

    @Effect() effectWithPayloadExample$ = this.action$
        .ofType('SEND_PAYLOAD_TO_EFFECT')
        .map(toPayload)
        .switchMap(payload => {
            console.log('the payload was: ' + payload.message);
            return Observable.of({
                type: 'PAYLOAD_EFFECT_RESPONDS',
                payload: {
                    message: 'the effect says hi!'
                }
            });
        });

    @Effect() timeEffect = this.action$
        .ofType('SET_TIMER')
        .map(toPayload)
        .switchMap(payload => {
            return Observable.timer(payload.seconds * 1000)
                .switchMap(()=> 
                    Observable.of({
                        type: 'TIMER_FINISHED'
                    })
                )
        })


    @Effect() resetToOne$ = this.action$
        .ofType(CounterActions.RESET)
        .switchMap(() => 
            Observable.of({
                type: CounterActions.RESET_TO_ONE
            })
        );
}
