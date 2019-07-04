import { Component, OnInit, Input } from "@angular/core";
import { IPost } from "../../interfaces/post.interface";
import { IPostList } from "../../interfaces/post-list.interface";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-post-feed",
  templateUrl: "./post-feed.component.html",
  styleUrls: ["./post-feed.component.scss"]
})
export class PostFeedComponent implements OnInit {
  @Input() posts: IPostList = null;

  constructor(private postService: PostsService) {}

  ngOnInit() {}

  async onAddPost(post: IPost) {
    console.log("onAddPost");
    this.posts.unshift(post);
    try {
      await this.postService.addPost(post);
    } catch (err) {
      console.warn(err);
    }
  }

  async onRemovePost(post: IPost) {
    console.log("onRemovePost");
    //this.posts.unshift(post);
    try {
      await this.postService.removePost(post);
      const postIndex = this.posts.indexOf(post);
      this.posts.splice(postIndex,1);
    } catch (err) {
      console.warn(err);
    }
  }
}
