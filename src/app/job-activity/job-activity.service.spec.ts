import { TestBed } from '@angular/core/testing';

import { JobActivityService } from './job-activity.service';

describe('JobActivityService', () => {
  let service: JobActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
