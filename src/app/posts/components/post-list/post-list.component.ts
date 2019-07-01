import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList = [
    {id:'123',body:'Mam fajnego psa',author:{
      name: 'Ola'
    }},
    {id:'124',body:'Mam fajnego kota',author:{
      name: 'Ala'
    }},
    {id:'125',body:'Zjadlem pizze', author:{
      name: 'Adam'
    }}
  ]
  constructor() { }

  ngOnInit() {
  }

}
