import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.css']
})
export class NumberPadComponent implements OnInit {
  @Output() clicked = new EventEmitter<number>();
  keys: number[];

  constructor() { }

  ngOnInit() {
    this.keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  onClick(key: number) {
    this.clicked.emit(key);
  }

}
