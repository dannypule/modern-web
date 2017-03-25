import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { AngularFire } from "angularfire2";

import { CounterActions } from "../counter/counter.actions";
import { SearchActions } from "../search/search.actions";

@Injectable()
export class MainEffects {
    constructor(
        private action$: Actions,
        private af: AngularFire,
        private http: Http
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
                .switchMap(() =>
                    Observable.of({
                        type: 'TIMER_FINISHED'
                    })
                )
        });

    @Effect() pullArrayFromFirebase$ = this.action$
        .ofType('PULL_ARRAY_FROM_FIREBASE')
        .switchMap(() =>
            this.af.database.list('/cypherapp/rooms/')
                .switchMap(result =>
                    Observable.of({
                        type: 'GOT_FIREBASE_ARRAY',
                        payload: {
                            pulledArray: result
                        }
                    })
                )
        );

    @Effect() pullObjectFromFirebase$ = this.action$
        .ofType('PULL_OBJECT_FROM_FIREBASE')
        .switchMap(() => {

            console.log('in the first switchMap!');

            return this.af.database.object('/cypherapp/rooms/')
                .switchMap(result => {

                    console.log('oh yeah, we got the result!!');

                    return Observable.of({
                        type: 'GOT_FIREBASE_OBJECT',
                        payload: {
                            pulledArray: result
                        }
                    })
                })
        });

    @Effect() getPostCodeData$ = this.action$
        .ofType(SearchActions.PERFORM_SEARCH)
        .map(toPayload)
        .switchMap(payload => {
            console.log('in the first switchMap!');

            return this.http
                .get(`https://api.postcodes.io/postcodes/${payload.searchText}`)
                .map(response => {
                    console.log('oh yeah, we got the result!!');
                    console.log(response.json());
                    return response.json()
                })
                .switchMap(result => {
                    return Observable.of({
                        type: SearchActions.SEARCH_RESULT_RECEIVED,
                        payload: {
                            searchResult: result
                        }
                    })
                })
        });


    @Effect() resetToOne$ = this.action$
        .ofType(CounterActions.RESET)
        .switchMap(() =>
            Observable.of({
                type: CounterActions.RESET_TO_ONE
            })
        );
}
