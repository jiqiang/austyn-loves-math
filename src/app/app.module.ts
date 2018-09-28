import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { ExamSettingComponent } from './exam-setting/exam-setting.component';
import { ExamStartComponent } from './exam-start/exam-start.component';
import { ExamStatisticsComponent } from './exam-statistics/exam-statistics.component';
import { ExamKeyboardComponent } from './exam-keyboard/exam-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamSettingComponent,
    ExamStartComponent,
    ExamStatisticsComponent,
    ExamKeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
