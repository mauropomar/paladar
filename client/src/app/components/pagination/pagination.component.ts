import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages:number;
  @Input() numberPage: number;
  @Output() next: EventEmitter<number>;
  @Output() previous: EventEmitter<number>;
  total:number = 5;

  constructor() {
    this.next = new EventEmitter();
    this.previous = new EventEmitter();
   }

  ngOnInit(): void {
  }

  nextPage(){
    this.numberPage = this.numberPage + 1;
    this.next.emit(this.numberPage);
  }

  previousPage(){
    this.numberPage = this.numberPage - 1;
    this.next.emit(this.numberPage);
  }

}
