import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: IUser){
    return this.http.post(environment.usersUrl,user).toPromise();
  }
}
