import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from './arithmetic.service';
import { Operation } from './operation';
import { OperationType } from './operation-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'austyn-loves-math';
  operation: Operation ;
  operations: Operation[];
  userInput: string = '';
  score: number = 0;
  index: number = 0;
  isWrongAnswer: boolean = false;

  constructor(private arithmeticService: ArithmeticService) {}

  getOperation(): void {
    this.operation = this.operations[this.index];
  }

  getOperations(): void {
    let additions = this.arithmeticService.getAdditionOperations(OperationType.ADDITION);
    let subtractions = this.arithmeticService.getSubtractionOperations(OperationType.SUBTRACTION);
    this.operations = additions.concat(subtractions);
    this.operations = this.arithmeticService.shuffle(this.operations);
  }

  selectNext(): void {
    this.getOperation();
    this.clearUserInput();
  }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.score = 0;
    this.index = 0;
    this.userInput = '';
    this.isWrongAnswer = false;
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
    if (this.index === this.operations.length - 1) {
      return;
    }

    if (this.operation.result === parseInt(this.userInput)) {
      this.score++;
      this.index++;
      this.selectNext();
    } else {
      this.isWrongAnswer = true;
    }
  }
}
