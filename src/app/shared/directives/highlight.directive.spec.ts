import {TestBed, async} from '@angular/core/testing'
import { HighlightDirective } from './highlight.directive';
import { FakeComponent } from 'src/fakes/fake-components';
import { By } from '@angular/platform-browser';

describe('HighlightDirective', () => {
  let fixture = null;
  let component = null;
  let $component = null;

  let divDebugElement = null;
  let divNativeElement = null;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[
        FakeComponent,
        HighlightDirective
      ]
    }).compileComponents();
  }))

  beforeEach(()=>{
    fixture = TestBed.createComponent(FakeComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;

    divDebugElement = fixture.debugElement.query(
      By.directive(HighlightDirective)
    );

    divNativeElement = divDebugElement.nativeElement;

  })

  it('should add class after mouseover', () => {
    expect(divNativeElement.classList.contains('border')).toBeFalsy();

    divDebugElement.triggerEventHandler('mouseover');
    fixture.detectChanges();

    expect(divNativeElement.classList.contains('border')).toBeTruthy();
  });

  it('should remove class after mouseleave', () => {
    divNativeElement.classList.add('border');

    divDebugElement.triggerEventHandler('mouseleave');
    fixture.detectChanges();

    expect(divNativeElement.classList.contains('border')).toBeFalsy();
  });

});
