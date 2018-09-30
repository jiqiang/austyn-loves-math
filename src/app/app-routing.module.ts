import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamStatisticsComponent } from './exam-statistics/exam-statistics.component';
import { ExamSettingComponent } from './exam-setting/exam-setting.component';
import { ExamStartComponent } from './exam-start/exam-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'statistics', component: ExamStatisticsComponent },
  { path: 'setting', component: ExamSettingComponent },
  { path: 'start', component: ExamStartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
