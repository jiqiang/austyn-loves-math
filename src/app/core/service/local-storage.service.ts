import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private key = 'austyn_loves_math';

  fetch(): string {
    let setting = localStorage.getItem(this.key);
    if (setting == null) {
      return '';
    }
    return setting;
  }

  save(setting: string): void {
    localStorage.setItem(this.key, setting);
  }
}
