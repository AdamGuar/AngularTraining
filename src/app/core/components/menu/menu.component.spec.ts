import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let $component : any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance; //instancja klasy
    $component = fixture.nativeElement; //instacja elementu w DOM
    fixture.detectChanges();
  });

  afterEach(()=>{
    $component.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
