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

  constructor(private arithmeticService: ArithmeticService) {}

  getOperation(): void {
    this.operation = this.operations[this.arithmeticService.getRandomInt(0, 99)];
  }

  getOperations(): void {
    this.operations = this.arithmeticService.getAdditionOperations(OperationType.ADDITION);
  }

  selectNext(): void {
    this.getOperation();
  }

  ngOnInit() {
    this.getOperations();
    this.getOperation();
  }

  onNumberPadClicked(value: number) {
    console.log(value);
  }

}
