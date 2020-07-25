import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobNotesComponent } from './update-job-notes.component';

describe('UpdateJobNotesComponent', () => {
  let component: UpdateJobNotesComponent;
  let fixture: ComponentFixture<UpdateJobNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
