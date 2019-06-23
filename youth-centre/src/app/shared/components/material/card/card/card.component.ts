import { Component, Input, ViewEncapsulation } from "@angular/core";
import { IPost } from "@app/shared/interfaces/IPost";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() post: IPost;
}
