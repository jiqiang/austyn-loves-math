import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

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
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
