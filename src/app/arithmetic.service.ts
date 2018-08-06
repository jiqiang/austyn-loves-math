import { Injectable } from '@angular/core';
import { Operation } from './operation';
import { OperationType } from './operation-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getAdditionOperations(operationType: OperationType): Operation[] {
    let operations: Operation[] = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        operations.push(<Operation> {
          type: OperationType.ADDITION,
          n1: i,
          n2: j,
          result: this.getOperationResult(i, j, operationType)
        });
      }
    }
    return operations;
  }

  private getOperationResult(n1: number, n2: number, operationType: OperationType): number {
    let result: number;
    switch(operationType) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
    }
    return result;
  }
}
