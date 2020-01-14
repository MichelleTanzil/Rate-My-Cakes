import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-cake-review",
  templateUrl: "./cake-review.component.html",
  styleUrls: ["./cake-review.component.css"]
})
export class CakeReviewComponent implements OnInit {
  @Input() cake: {};
  newReview: {};

  constructor(private _httpService: HttpService) {
    this.newReview = { rating: "", comment: "" };
  }

  ngOnInit() {}
  onSubmitNewReview(id: string) {
    console.log(
      `Click event is working with event: ${JSON.stringify(this.newReview)}`
    );
    let observable = this._httpService.createReview(this.newReview, id);
    observable.subscribe(newReview => {
      console.log("Got our new Review!", newReview);
    });
    this.newReview = { rating: "", comment: "" };
  }
}
