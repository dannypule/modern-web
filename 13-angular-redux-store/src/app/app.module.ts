import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import reduxLogger from 'redux-logger';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';

import {counterReducer} from './components/counter/counter';

const appRoutes: Routes = [
  { path: '', component: CounterComponent },
];

const logger: any = reduxLogger;

// interface IAppState {
//   counter: number;
// }

export const store: Store<number> = createStore(
  counterReducer,
  compose(applyMiddleware(logger))
)

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<number>
  ) {
    ngRedux.provideStore(store);
  }
}
