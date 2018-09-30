import { Injectable, SimpleChange } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamSettingService {
  private setting: any;

  constructor() { }

  fetchSetting(): any {
    if (this.setting) {
      console.log("fetch cached setting");
      return this.setting;
    }

    this.setting = this.fetchSettingFromLocalStorage();
    return this.setting;
  }

  fetchSettingFromLocalStorage(): any {
    console.log("fetch stored setting");
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
