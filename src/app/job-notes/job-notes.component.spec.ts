import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNotesComponent } from './job-notes.component';

describe('JobNotesComponent', () => {
  let component: JobNotesComponent;
  let fixture: ComponentFixture<JobNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
