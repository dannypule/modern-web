import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AngularFireModule } from 'angularfire2';
import {PrettyJsonModule} from 'angular2-prettyjson';
import 'rxjs/Rx';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CounterComponent } from './components';
import { SearchComponent } from './components';

import { rootReducer } from './store/rootReducer';
import { CounterActions } from './store/counter/counter.actions';
import { CounterEffects } from './store/counter/counter.effects';
import { SearchActions } from './store/search/search.actions';

import { CounterService } from './services';

import { MainEffects } from "./store/effects/main.effects"; 

export const firebaseConfig = {
  apiKey: "AIzaSyA30SGQ-4ozFHftYzsHlQxFdqVgbvuaLVU",
  authDomain: "cypherapp-ef93a.firebaseapp.com",
  databaseURL: "https://cypherapp-ef93a.firebaseio.com",
  storageBucket: "cypherapp-ef93a.appspot.com",
  messagingSenderId: "550160402640"
};

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrettyJsonModule,
    // routing, // disable routing for this demo
    StoreModule.provideStore(rootReducer),
    EffectsModule.run(MainEffects),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    CounterActions,
    CounterService,
    SearchActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
