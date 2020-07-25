import { TestBed } from '@angular/core/testing';

import { JobNotesService } from './job-notes.service';

describe('JobNotesService', () => {
  let service: JobNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
