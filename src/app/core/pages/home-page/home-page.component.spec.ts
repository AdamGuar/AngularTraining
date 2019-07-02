import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { PostListComponent } from 'src/app/posts/components/post-list/post-list.component';
import { PostListItemComponent } from 'src/app/posts/components/post-list-item/post-list-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsModule } from 'src/app/posts/posts.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let $component: any;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent],
      imports: [PostsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
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
