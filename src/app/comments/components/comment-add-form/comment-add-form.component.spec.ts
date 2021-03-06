import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAddFormComponent } from './comment-add-form.component';

describe('CommentAddFormComponent', () => {
  let component: CommentAddFormComponent;
  let $component = null;
  let fixture: ComponentFixture<CommentAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAddFormComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(()=>{
    $component.remove();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
