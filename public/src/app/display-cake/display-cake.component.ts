import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-display-cake",
  templateUrl: "./display-cake.component.html",
  styleUrls: ["./display-cake.component.css"]
})
export class DisplayCakeComponent implements OnInit {
  @Input() cakeToShow: any;
  @Input() cakeToShowAverage: any;
  constructor() {}

  ngOnInit() {}
}
