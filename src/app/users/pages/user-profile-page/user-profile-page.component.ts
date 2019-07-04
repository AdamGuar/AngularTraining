import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { IUser } from "../../interfaces/user.interface";

@Component({
  selector: "app-user-profile-page",
  templateUrl: "./user-profile-page.component.html",
  styleUrls: ["./user-profile-page.component.scss"]
})
export class UserProfilePageComponent implements OnInit {
  user: IUser = null;
  error = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  async ngOnInit() {
    const userId = this.route.snapshot.params.userId;
    console.log("userId", userId);
    try {
      this.user = await this.usersService.getUserById(userId);
    } catch (err) {
      console.warn(err);
      if(err && err.status === 404){
        this.router.navigate(['/404']);
      }
      this.error = err.message;
    }
  }
}
