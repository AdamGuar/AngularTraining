import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IPost } from "../../interfaces/post.interface";
import { uuid } from "node_modules/uuid";
import { UsersService } from "src/app/users/services/users.service";

@Component({
  selector: "app-post-add-form",
  templateUrl: "./post-add-form.component.html",
  styleUrls: ["./post-add-form.component.scss"]
})
export class PostAddFormComponent implements OnInit {
  static parsePostForm(form, author): IPost {
    return {
      id: uuid(),
      created_time: new Date().toUTCString(),
      body: form.body,
      author,
      images: []
    };
  }

  @Output() addPost = new EventEmitter();

  body = new FormControl("", [Validators.required]);

  addForm = new FormGroup({
    body: this.body
  });

  constructor(private userService: UsersService) {}

  ngOnInit() {}

  onSubmit() {
    const form = this.addForm.getRawValue();
    const user = this.userService.getUser();
    const post = PostAddFormComponent.parsePostForm(form, user);
    console.log("onSubmit()", post);
    try {
      this.addPost.next(post);
    } catch (err) {
      console.log("Unable to add post", err);
    }
  }
}
