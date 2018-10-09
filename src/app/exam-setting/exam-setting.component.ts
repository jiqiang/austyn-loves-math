import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExamSettingService } from '../core/service/exam-setting.service';

@Component({
  selector: 'exam-setting',
  templateUrl: './exam-setting.component.html',
  styleUrls: ['./exam-setting.component.css']
})
export class ExamSettingComponent implements OnInit {
  public settingForm = new FormGroup({
    testAddition: new FormControl(false),
    additionAMin: new FormControl(''),
    additionAMax: new FormControl(''),
    additionBMin: new FormControl(''),
    additionBMax: new FormControl(''),
    testSubtraction: new FormControl(false),
    subtractionAMin: new FormControl(''),
    subtractionAMax: new FormControl(''),
    subtractionBMin: new FormControl(''),
    subtractionBMax: new FormControl(''),
    subtractionAllowNegtiveResult: new FormControl(false)
  });
  
  constructor(private examSettingService: ExamSettingService) { }

  ngOnInit() {
    this.settingForm.setValue(this.examSettingService.fetchSetting());
  }

  onSubmit() {
    this.examSettingService.save(this.settingForm.value);
  }

}
