import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { post } from 'selenium-webdriver/http';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {
  post: IPost = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.setupPost()
  }

  async setupPost(){
    const postId = this.route.snapshot.params.postId;
    console.log(postId);
    const post = await this.postService.getPostsById(postId);
    this.post = post;
  }

}
