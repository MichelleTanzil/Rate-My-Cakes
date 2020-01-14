import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Rate My Cakes";
  cakes = [];
  newCake: {};
  currentCake: any;
  currentCakeAverage: any;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getCakes();
    this.newCake = { baker_name: "", image: "" };

  }
  getCakes() {
    let observable = this._httpService.getCakes();
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.cakes = data["cakes"];
    });
  }
  getCake(id: string) {
    console.log(`Click event is working with event: ${id}`);
    let observable = this._httpService.getCake(id);
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.currentCake = data;
      if (this.currentCake.reviews.length == 0) {
        this.currentCakeAverage = null;
      } else {
        let sum = 0;
        for (let i = 0; i < this.currentCake.reviews.length; i++) {
          sum += this.currentCake.reviews[i].rating;
        }
        this.currentCakeAverage = sum / this.currentCake.reviews.length;
      }
    });
  }
  onSubmitNewCake() {
    console.log(
      `Click event is working with event: ${JSON.stringify(this.newCake)}`
    );
    let observable = this._httpService.createCake(this.newCake);
    observable.subscribe(newCake => {
      console.log("Got our new cake!", newCake);
    });
    this.newCake = { baker_name: "", image: "" };
    this.getCakes();
  }

}
