import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUserCredentials } from '../interfaces/user-credentials.interface';
import { IUserList } from '../interfaces/user-list.interface';

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

}
