import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsPostDetailComponent } from './blogs-post-detail.component';

describe('BlogsPostDetailComponent', () => {
  let component: BlogsPostDetailComponent;
  let fixture: ComponentFixture<BlogsPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsPostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
