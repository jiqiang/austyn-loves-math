import { Injectable } from '@angular/core';
import { Operation } from './operation';
import { OperationType } from './operation-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { }

  public getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getAdditionResultTens() {
    const operations: Operation[] = [];
    for (let i = 1; i < 10; i ++) {
      operations.push(<Operation> {
        type: OperationType.ADDITION,
        n1: i,
        n2: 10 - i,
        result: 10
      });
    }
    return this.shuffle(operations);
  }

  public getAdditionOperations(operationType: OperationType): Operation[] {
    const operations: Operation[] = [];
    for (let i = 10; i < 100; i++) {
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

  public getSubtractionOperations(operationType: OperationType): Operation[] {
    const operations: Operation[] = [];
    for (let i = 10; i < 100; i++) {
      for (let j = 0; j < 10; j++) {
        operations.push(<Operation> {
          type: OperationType.SUBTRACTION,
          n1: i,
          n2: j,
          result: this.getOperationResult(i, j, operationType)
        });
      }
    }
    return operations
  }

  private getOperationResult(n1: number, n2: number, operationType: OperationType): number {
    let result: number;
    switch (operationType) {
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

  public shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      const index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      const temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

  public getOperations() {
    let addOpts = this.getAdditionOperations(OperationType.ADDITION);
    let subOpts = this.getSubtractionOperations(OperationType.SUBTRACTION);
    return this.shuffle(this.shuffle(addOpts).slice(0, 25).concat(this.shuffle(subOpts).slice(0, 25)));
  }
}
