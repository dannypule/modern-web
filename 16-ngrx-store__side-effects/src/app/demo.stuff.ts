import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

//inherit from subject
@Injectable()
export class Dispatcher extends Subject<any> {
  dispatch(value: any): void {
    this.next(value);
  }
}