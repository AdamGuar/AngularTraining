import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts = null;
  @Output() removePost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log('this.posts',this.posts);
    if(!this.posts) return;
    this.posts.sort((post1,post2)=>{
      const date1 = new Date(post1.created_time);
      const date2 = new Date(post2.created_time);
      if(date1.getTime() > date2.getTime()) return -1;
      else if(date1.getTime() < date2.getTime()) return 1;
      else return 0;
    });
  }

  onRemovePost(post: IPost){
    this.removePost.next(post);
  }

}
