import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.css']
})
export class NumberPadComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  keys: string[];

  constructor() { }

  ngOnInit() {
    this.keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'OK', '0', 'CLEAR'];
  }

  onClick(key: string) {
    this.clicked.emit(key);
  }

}
