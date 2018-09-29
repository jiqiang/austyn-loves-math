import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamSettingService {
  private setting: any;

  constructor() { }

  fetchSetting(): any {
    return {
      "addition": {
        "opt1": {
          "min": 0,
          "max": 9
        },
        "opt2": {
          "min": 0,
          "max": 9
        }
      },
      "subtraction": {
        "opt1": {
          "min": 0,
          "max": 9
        },
        "opt2": {
          "min": 0,
          "max": 9
        },
        "allow_negtive_result": false
      }
    };
  }
}
