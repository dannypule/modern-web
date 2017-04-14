import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from "@ngrx/store";

import { Counter } from './models/counter';
import { CounterService } from './services/counter.service';
import { CounterActions } from './store/counter/counter.actions';
import { SearchActions } from "app/store/search/search.actions";
import { SearchQuery, AppState } from "app/models";

import { Dispatcher } from "./demo.stuff";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter$: Observable<Counter>;
  searchQuery: SearchQuery;

  constructor(
    private counterService: CounterService,
    public actions: CounterActions,
    public searchActions: SearchActions,
    private store: Store<AppState>,
    private dispatcher: Dispatcher
  ) {
    this.counter$ = counterService.getCounter();
    this.store.select('searchQuery').subscribe((searchQuery: SearchQuery) => {
      this.searchQuery = searchQuery;
    })
  }

  ngOnInit() {
    // this.subjectDemo(); // demo stuff
    // this.dispatcherDemo(); // demo stuff
    // this.reduceDemo(); // demo stuff
    // this.scanDemo(); // demo stuff
    this.scanDemoTwo(); // demo stuff
  }


  // .................................................................
  /// NON-RELATED DEMO STUFF BELOW
  // .................

  subjectDemo() {
    //create a subject
    const mySubject = new Subject();

    //add subscribers
    const subscriberOne = mySubject.subscribe(val => {
      console.log('***SUBSCRIBER ONE***', val);
    });

    const subscriberTwo = mySubject.subscribe(val => {
      console.log('***SUBSCRIBER TWO***', val);
    });

    //publish values to observers of subject
    mySubject.next('FIRST VALUE!'); '***SUBSCRIBER ONE*** FIRST VALUE! ***SUBSCRIBER TWO*** FIRST VALUE!'
    mySubject.next('SECOND VALUE!'); '***SUBSCRIBER ONE*** SECOND VALUE! ***SUBSCRIBER TWO*** SECOND VALUE!'
  }

  dispatcherDemo() {
    //create a dispatcher (just a Subject with wrapped next method)
    // const dispatcher = new Dispatcher();

    //add subscribers
    const subscriberOne = this.dispatcher.subscribe(val => {
      console.log('***SUBSCRIBER ONE***', val);
    });

    const subscriberTwo = this.dispatcher.subscribe(val => {
      console.log('***SUBSCRIBER TWO***', val);
    });

    //publish values to observers of dispatcher
    this.dispatcher.dispatch('FIRST DISPATCHED VALUE!');
    this.dispatcher.dispatch('SECOND DISPATCHED VALUE!');
  }

  reduceDemo() {
    //We can also provide an initial value for reduce as a second parameter
    const personInfoStart = [{ name: 'Joe' }, { age: 31 }, { birthday: '1/1/1985' }];
    /*
    1.) accumulator: {favoriteLanguage: 'JavaScript'}, current: {name: 'Joe'}
    2.) accumulator: {favoriteLanguage: 'JavaScript', name: 'Joe'}, current: {age: 31}
    3.) accumulator: {favoriteLanguage: 'JavaScript', name: 'Joe', age: 31}, current: {birthday: '1/1/1985'}
    Final: {favoriteLanguage: 'JavaScript', name: 'Joe', age: 31, birthday: '1/1/1985'}
    */
    const fullPersonStart = personInfoStart.reduce((accumulator, current) => {
      return Object.assign({}, accumulator, current)
    }, { favoriteLanguage: 'JavaScript', favoriteBeverage: 'coffee' });
    console.log('***FULL PERSON START:', fullPersonStart);
  }

  scanDemo() {
    const testSubject = new Subject();
    //basic scan example, sum over time starting with zero
    const basicScan = testSubject.scan((acc: any, curr: any) => {
      return acc + curr
    }, 0);
    //log accumulated values
    const subscribe = basicScan.subscribe(val => console.log('Accumulated total:', val));
    //pass values into our test subject, adding to the current sum
    testSubject.next(1); //1
    testSubject.next(2); //3
    testSubject.next(3); //6
  }

  scanDemoTwo() {
    const testSubjectTwo = new Subject();
    //scan example building an object over time
    const objectScan = testSubjectTwo.scan((acc, curr) => Object.assign({}, acc, curr), {});
    //log accumulated values
    const subscribe = objectScan.subscribe(val => console.log('Accumulated object:', val));
    //pass values into our test subject, adding properties to object
    testSubjectTwo.next({ name: 'Joe' }); // {name: 'Joe'}
    testSubjectTwo.next({ age: 30 }); // {name: 'Joe', age: 30}
    testSubjectTwo.next({ favoriteFramework: 'Angular 2' }); // {name: 'Joe', age: 30, favoriteFramework: 'Angular 2'}
  }
}
