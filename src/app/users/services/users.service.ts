import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUserCredentials } from '../interfaces/user-credentials.interface';
import { IUserList } from '../interfaces/user-list.interface';
import { BehaviorSubject, throwError } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  $user = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {
    this.restore();
  }

  register(user: IUser){
    return this.http.post(environment.usersUrl,user).toPromise();
  }

  getUserById(userId){
    const url = `${environment.usersUrl}/${userId}`
    return this.http.get<IUser>(url).toPromise();
  }

  async login(credentials: IUserCredentials){
    const users = await this.http.get<IUserList>(environment.usersUrl).toPromise();
    const authUser = users.find((user)=>{
      return user.email === credentials.email && user.password === credentials.password;
    });
    return {
      status: Boolean(authUser),
      ...authUser
    }
  }

  auth(authResponse){
    this.$user.next(authResponse);
    this.storage.create('user',authResponse)
  }

  logout(){
    this.$user.next(null);
    this.storage.delete('user');
  }

  restore(){
    const user = this.storage.read('user');
    if(!user){
      return;
    }
    this.$user.next(user);
  }

  getUser(){
    return this.$user.getValue();
  }

  destroyUser(){
    const user = this.getUser();
    const url = `${environment.usersUrl}/${user.id}`;
    return this.http.delete(url).pipe(catchError(value=>{
      return throwError(value);
    }),tap(value=>{
      this.logout();
    })
    ).toPromise();
  }

}
