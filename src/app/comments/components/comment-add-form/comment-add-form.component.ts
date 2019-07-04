import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IComment } from "../../interfaces/comment";
import uuid from "uuid";
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: "app-comment-add-form",
  templateUrl: "./comment-add-form.component.html",
  styleUrls: ["./comment-add-form.component.scss"]
})
export class CommentAddFormComponent implements OnInit {
  static parseCommentForm(comment, author): IComment {
    return {
      id: uuid(),
      body: comment.body,
      created_time: new Date().toUTCString(),
      author
    };
  }

  @Output() addComment = new EventEmitter();

  comment = {
    body: null
  };

  constructor(private userService : UsersService) {}

  ngOnInit() {}

  async onSubmit(form) {
    console.log("onSubmit", this.comment);
    const user = await this.userService.getUser();
    const comment = CommentAddFormComponent.parseCommentForm(this.comment,user);
    this.addComment.next(comment);
    form.reset();
  }
}
