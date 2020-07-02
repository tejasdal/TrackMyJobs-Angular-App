import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteDialogComponent } from './create-note-dialog.component';

describe('CreateNoteDialogComponent', () => {
  let component: CreateNoteDialogComponent;
  let fixture: ComponentFixture<CreateNoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNoteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
