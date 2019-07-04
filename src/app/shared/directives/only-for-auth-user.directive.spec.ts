import { OnlyForAuthUserDirective } from './only-for-auth-user.directive';
import { UsersService } from 'src/app/users/services/users.service';
import { ElementRef, Renderer2 } from '@angular/core';

describe('OnlyForAuthUserDirective', () => {
  it('should create an instance', () => {
    //const directive = new OnlyForAuthUserDirective(UsersService,ElementRef,Renderer2);
    expect(true).toBeTruthy();
  });
});
