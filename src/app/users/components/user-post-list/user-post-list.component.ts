import { Component, OnInit } from '@angular/core';
import { IPostList } from 'src/app/posts/interfaces/post-list.interface';
import { UsersService } from '../../services/users.service';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.scss']
})
export class UserPostListComponent implements OnInit {

  userPosts: IPostList = null;

  constructor(private usersService : UsersService,
              private postService: PostsService) { }

  async ngOnInit() {
    const posts = await this.postService.getPosts();
    const user = await this.usersService.getUser();
    this.userPosts = posts.filter((post)=>{
      return post.author.id === user.id;
    });
  }

}
