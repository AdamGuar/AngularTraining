import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-user-remove-page",
  templateUrl: "./user-remove-page.component.html",
  styleUrls: ["./user-remove-page.component.scss"]
})
export class UserRemovePageComponent implements OnInit {
  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit() {}

  onDismiss() {
    console.log("onDismiss");
    this.router.navigateByUrl("/users/profile");
  }

  async onAccept() {
    console.log("onAccept");
    try {
      await this.userService.destroyUser();
      this.router.navigateByUrl("/");
    } catch (err) {
      console.warn(err);
    }
  }
}
