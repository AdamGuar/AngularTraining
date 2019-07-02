import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';

describe('AppComponent', () => {
  let fixture = null;
  let app : AppComponent;
  let $app : any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MenuComponent
      ],
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    $app = fixture.nativeElement;
  });

  afterEach(()=>{
    $app.remove();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
