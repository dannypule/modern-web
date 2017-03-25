import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';

import { counterReducer } from './components/counter/counter';

let storeModule: any = StoreModule;

const appRoutes: Routes = [
  { path: '', component: CounterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
