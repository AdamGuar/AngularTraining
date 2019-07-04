import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { UsersService } from '../../users/services/users.service';

@Directive({
  selector: '[appOnlyForAuthUser]'
})
export class OnlyForAuthUserDirective {

  constructor(private userService: UsersService,
              private el : ElementRef,
              private renderer: Renderer2) {
                this.toggleContainer();
              }

  private toggleContainer(){
    this.userService.$user.subscribe({
      next: (value) => {
        const $el = this.el.nativeElement;
        const isUserLogged = (value !== null) && value.status;
        if(isUserLogged) {
          this.renderer.removeClass($el, "hide");
          return;
        }
        this.renderer.addClass($el, "hide");
      },
      error: (err) => {console.warn('Problem occured with user stream',err)},
      complete: () => {console.warn('User stream closed')}
    });
  }

}
