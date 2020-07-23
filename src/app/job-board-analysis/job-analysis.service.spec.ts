import { TestBed } from '@angular/core/testing';

import { JobAnalysisService } from './job-analysis.service';

describe('JobAnalysisService', () => {
  let service: JobAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
