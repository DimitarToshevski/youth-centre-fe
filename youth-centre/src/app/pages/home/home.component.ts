import { Component, OnInit } from "@angular/core";
import { PostService } from "@app/shared/services/posts.service";
import { IPost } from "@app/shared/interfaces/IPost";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  loading = true;
  posts$: Observable<Array<IPost>>;
  constructor(private _postService: PostService) {}

  ngOnInit() {
    this.posts$ = this._postService
      .getPosts()
      .pipe(finalize(() => (this.loading = false)));
  }
}
