import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobNotesComponent } from './delete-job-notes.component';

describe('DeleteJobNotesComponent', () => {
  let component: DeleteJobNotesComponent;
  let fixture: ComponentFixture<DeleteJobNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJobNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJobNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
