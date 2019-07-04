import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from '../interfaces/post-list.interface';
import { environment } from 'src/environments/environment';
import { IPost } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {}

  getPosts(){
    return this.http.get<IPostList>(environment.postsUrl).toPromise();
  }

  async getPostsById(postId : string){
    const posts = await this.getPosts();
    return posts.find((post)=>{
      return post.id === postId;
    });
  }

  addPost(post: IPost): any {
    console.log('Adding post from service');
    return this.http.post(environment.postsUrl,post).toPromise();
  }

  savePost(post: IPost): any {
    const url = `${environment.postsUrl}/${post.id}`;
    return this.http.put(url,post).toPromise();
  }

  removePost(post: IPost): any {
    const url = `${environment.postsUrl}/${post.id}`;
    return this.http.delete(url).toPromise();
  }

}
