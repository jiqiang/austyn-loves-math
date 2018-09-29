import { TestBed, inject } from '@angular/core/testing';

import { ExamSettingService } from './exam-setting.service';

describe('ExamSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamSettingService]
    });
  });

  it('should be created', inject([ExamSettingService], (service: ExamSettingService) => {
    expect(service).toBeTruthy();
  }));
});
