import { Injectable } from '@angular/core';
import { Operation } from '../operation';
import { OperationType } from '../operation-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private setting: any;

  constructor() {}

  public set Setting(setting: any) {
    this.setting = setting;
  }

  public getAdditionOperations(operationType: OperationType): Operation[] {
    const operations: Operation[] = [];
    for (let i = this.setting.additionAMin; i <= this.setting.additionAMax; i++) {
      for (let j = this.setting.additionBMin; j <= this.setting.additionBMax; j++) {
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
    for (let i = this.setting.subtractionAMin; i <= this.setting.subtractionAMax; i++) {
      for (let j = this.setting.subtractionBMin; j <= this.setting.subtractionBMax; j++) {
        if (!this.setting.subtractionAllowNegtiveResult && this.getOperationResult(i, j, operationType) < 0) {
          continue;
        }
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
    let opts = [];
    if (this.setting.testAddition) {
      opts = opts.concat(this.shuffle(this.getAdditionOperations(OperationType.ADDITION)).slice(0, 25));
    }

    if (this.setting.testSubtraction) {
      opts = opts.concat(this.shuffle(this.getSubtractionOperations(OperationType.SUBTRACTION)).slice(0, 25));
    }
    
    return this.shuffle(opts);
  }
}
