import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import 'rxjs/Rx';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CounterComponent } from './components';

import { rootReducer } from './store/rootReducer';
import { CounterActions } from './store/counter/counter.actions';
import { CounterEffects } from './store/counter/counter.effects';

import { CounterService } from './services';

import { MainEffects } from "./store/effects/main.effects"; 

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing, // disable routing for this demo
    StoreModule.provideStore(rootReducer),
    EffectsModule.run(MainEffects)
  ],
  providers: [
    CounterActions,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
