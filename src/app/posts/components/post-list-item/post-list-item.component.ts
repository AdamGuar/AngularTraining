import { Component, OnInit, Input } from "@angular/core";
import { IComment } from 'src/app/comments/interfaces/comment';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent implements OnInit {
  @Input() post = null;

  constructor(private postService : PostsService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.post.comments) this.post.comments = [];
  }

  async onAddComment(comment: IComment){
    console.log('onAddComment',comment);
    this.post.comments.push(comment);
    try{
      await this.postService.savePost(this.post);
    }catch(err){
      console.warn(err);
    }
  }
}
