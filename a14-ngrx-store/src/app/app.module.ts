import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import {CounterComponent} from './components';

import { rootReducer } from './store/rootReducer';
import { CounterActions } from './store/counter/counter.actions';
import { CounterEffects } from './store/counter/counter.effects';
import { CounterService } from './services';

const appRoutes: Routes = [
  { path: '', component: CounterComponent },
];


// console.log(rootReducer);

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EffectsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore(rootReducer)
  ],
  providers: [
    CounterActions,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
