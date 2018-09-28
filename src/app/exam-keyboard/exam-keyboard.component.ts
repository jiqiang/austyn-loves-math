import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exam-keyboard',
  templateUrl: './exam-keyboard.component.html',
  styleUrls: ['./exam-keyboard.component.css']
})
export class ExamKeyboardComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onClick(key: string) {
    this.clicked.emit(key);
  }

}
