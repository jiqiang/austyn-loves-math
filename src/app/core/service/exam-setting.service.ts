import { Injectable, SimpleChange } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExamSettingService {
  private setting: any;

  public defaultSetting = {
    "testAddition": false,
    "additionAMin": 0,
    "additionAMax": 9,
    "additionBMin": 0,
    "additionBMax": 9,
    "testSubtraction": false,
    "subtractionAMin": 0,
    "subtractionAMax": 9,
    "subtractionBMin": 0,
    "subtractionBMax": 9,
    "subtractionAllowNegtiveResult": false
  };

  constructor(private localStorageService: LocalStorageService) { }

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
    let setting = this.localStorageService.fetch();
    if (setting === '') {
      this.localStorageService.save(JSON.stringify(this.defaultSetting));
      return this.defaultSetting;
    }
    return JSON.parse(setting);
  }

  save(setting: any): void {
    this.setting = setting;
    this.localStorageService.save(JSON.stringify(setting));
  }
}
