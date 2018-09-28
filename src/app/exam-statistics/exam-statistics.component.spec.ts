import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamStatisticsComponent } from './exam-statistics.component';

describe('ExamStatisticsComponent', () => {
  let component: ExamStatisticsComponent;
  let fixture: ComponentFixture<ExamStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
