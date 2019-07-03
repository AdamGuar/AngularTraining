import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {

  loginSuccess = false;
  loginError = null;
  loginLoading = false;

  user = {
    email: null,
    password: null
  };

  constructor(
    private storage : StorageService,
    private userService: UsersService,
    private router : Router
    ) {}

  ngOnInit() {}

  async onSubmit() {
    console.log("onSubmit", this.user);
    this.loginLoading = true;
    try {
      const authResponse = await this.userService.login(this.user);
      if(authResponse.status){
        this.userService.auth(authResponse);
        this.router.navigate(['users','profile'])
      }else{
        this.loginSuccess = false;
        this.loginError = 'Your email or password is invalid';
      }
      console.log("authenticated", authResponse);
    } catch (err) {
      this.loginError = err.message;
    } finally {
      this.loginLoading = false;
    }
  }
}
