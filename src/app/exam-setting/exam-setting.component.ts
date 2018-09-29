import { Component, OnInit } from '@angular/core';
import { ExamSettingService } from '../core/service/exam-setting.service';

@Component({
  selector: 'exam-setting',
  templateUrl: './exam-setting.component.html',
  styleUrls: ['./exam-setting.component.css']
})
export class ExamSettingComponent implements OnInit {
  public setting: any;
  
  constructor(private examSettingService: ExamSettingService) { }

  ngOnInit() {
    this.setting = this.examSettingService.fetchSetting();
  }

}
