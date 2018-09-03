import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.css']
})
export class NumberPadComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onClick(key: string) {
    this.clicked.emit(key);
  }

}
