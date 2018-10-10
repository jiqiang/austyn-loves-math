import { Component, OnInit } from '@angular/core';
import { Operation } from '../core/operation';
import { ExamService } from '../core/service/exam.service';
import { ExamSettingService } from '../core/service/exam-setting.service';

@Component({
  selector: 'exam-start',
  templateUrl: './exam-start.component.html',
  styleUrls: ['./exam-start.component.css']
})
export class ExamStartComponent implements OnInit {

  title = 'austyn-loves-math';
  operation: Operation ;
  operations: Operation[];
  userInput = '';
  score = 0;
  index = 0;
  isWrongAnswer = false;
  isCompleted = false;
  questionStartTime: any;
  questionEndTime: any;
  timeElapsed: number;

  constructor(
    private examService: ExamService,
    private examSettingService: ExamSettingService) {}

  getOperation(): void {
    this.operation = this.operations[this.index];
  }

  getOperations(): void {
    this.operations = this.examService.getOperations();
  }

  selectNext(): void {
    this.getOperation();
    this.clearUserInput();
  }

  ngOnInit() {
    this.examService.Setting = this.examSettingService.fetchSetting();
    this.reset();
    this.questionStartTime = new Date();
  }

  reset() {
    this.score = 0;
    this.index = 0;
    this.userInput = '';
    this.isWrongAnswer = false;
    this.isCompleted = false;
    this.questionStartTime = new Date();
    this.questionEndTime = new Date();
    this.getOperations();
    this.getOperation();
  }

  onNumberPadClicked(value: string): void {
    if (value === 'OK') {
      this.confirmUserInput();
      return;
    }

    if (value === 'CLEAR') {
      this.clearUserInput();
      return;
    }

    this.userInput += value;
  }

  clearUserInput(): void {
    this.userInput = '';
    this.isWrongAnswer = false;
  }

  confirmUserInput(): void {
    if (this.isCompleted) {
      return;
    }

    if (this.operation.result === parseInt(this.userInput, 10)) {
      this.score++;
      this.index++;
      this.questionEndTime = new Date();
      this.timeElapsed = this.questionEndTime - this.questionStartTime;
      this.questionStartTime = this.questionEndTime;
    } else {
      this.isWrongAnswer = true;
      return;
    }

    if (this.index === this.operations.length) {
      this.isCompleted = true;
      return;
    }

    this.selectNext();
  }

}
