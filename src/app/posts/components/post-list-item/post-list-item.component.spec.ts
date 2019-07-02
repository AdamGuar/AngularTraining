import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.post ={
      id:'fake-id',
      body:'fakebody',
      author:{
        name:'name'
      }
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
