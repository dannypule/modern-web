import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SearchQuery } from "app/models";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  @Input() result: any; 
  query = '';
 
  constructor(
    
  ) {

  }

  ngOnInit() {

  }

  @Output() onPerformSearch: EventEmitter<void> = new EventEmitter<void>();
}
