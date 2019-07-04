import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyForAuthUserGuard implements  CanActivate{

  constructor(private userService : UsersService,
    private router : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //1 czy uzytkownik jest zalogowany
    //2. status zalogowania
    return this.userService.$user.pipe(
      map(value=>{
        return (value !==null) && value.status
      }),
      tap(isUserLogged => {
        if(!isUserLogged){
          this.router.navigate(['/404']);
        }
      })
    )
  }


}
