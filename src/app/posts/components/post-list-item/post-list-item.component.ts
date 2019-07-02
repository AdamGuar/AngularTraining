import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent implements OnInit {
  @Input() post = null;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.post.comments) this.post.comments = [
      {body:"To jest slabe"},
      {body:"To jest super"}
    ];
  }
}
