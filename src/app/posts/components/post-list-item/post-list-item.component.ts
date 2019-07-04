import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IComment } from 'src/app/comments/interfaces/comment';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent implements OnInit {
  @Input() post = null;
  @Output() removePost = new EventEmitter();

  constructor(private postService : PostsService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.post.comments) this.post.comments = [];
  }

  async onRemovePost(post: IPost){
    this.removePost.next(this.post);
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
