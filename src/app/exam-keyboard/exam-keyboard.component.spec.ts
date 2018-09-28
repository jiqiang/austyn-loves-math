import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamKeyboardComponent } from './exam-keyboard.component';

describe('ExamKeyboardComponent', () => {
  let component: ExamKeyboardComponent;
  let fixture: ComponentFixture<ExamKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
