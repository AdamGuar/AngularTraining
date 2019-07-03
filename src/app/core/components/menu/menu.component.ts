import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  loggedUser = null;

  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.userService.$user.subscribe({
      next:(status)=>{
        if(status && status.status === true )
          this.loggedUser = status;
        else{
          this.loggedUser = false;
        }
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        this.loggedUser = null;
      }
    });
  }

}
