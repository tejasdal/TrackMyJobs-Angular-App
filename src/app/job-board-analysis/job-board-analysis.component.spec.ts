import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoardAnalysisComponent } from './job-board-analysis.component';

describe('JobBoardAnalysisComponent', () => {
  let component: JobBoardAnalysisComponent;
  let fixture: ComponentFixture<JobBoardAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobBoardAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBoardAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
