import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Counter } from "app/models";

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counter: Counter;

  constructor(
    
  ) {

  }

  ngOnInit() {

  }

  @Output() onIncrement: EventEmitter<void> = new EventEmitter<void>();

  @Output() onDeccrement: EventEmitter<void> = new EventEmitter<void>();

  @Output() onReset: EventEmitter<void> = new EventEmitter<void>();
}
