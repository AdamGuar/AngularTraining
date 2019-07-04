import { Component, OnInit, Input } from "@angular/core";
import { IUser } from "../../interfaces/user.interface";
import { UsersService } from "../../services/users.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  @Input() user: IUser = null;
  displayDelete = false;

  constructor(
    private userService: UsersService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    const urlUserId = this.router.snapshot.params.userId;
    const loggedUser = this.userService.getUser();
    if(!urlUserId){
      this.user = loggedUser;
      this.displayDelete = true;
      return;
    }

    if(loggedUser && loggedUser.id === urlUserId){
      this.displayDelete = true;
    }
  }
}
