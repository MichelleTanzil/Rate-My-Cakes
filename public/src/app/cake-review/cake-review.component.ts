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
  errors: {};
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
      if (newReview.errors) {
        console.log("NewReview Errors: ", newReview.errors);
        this.errors = newReview.errors;
        console.log("Errors: ", this.errors);
      }
    });
    this.errors = null;
    this.newReview = { rating: "", comment: "" };
  }
}
