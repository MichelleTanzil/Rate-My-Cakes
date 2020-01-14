import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }
  getCakes() {
    return this._http.get("/cakes");
  }

  createCake(newCake: any) {
    // let tempObservable = this._http.get("/cakes", newCake);
    // tempObservable.subscribe(data => console.log("Got our cake!", data));
    return this._http.post("/cakes", newCake);
  }

  getCake(cake_id: string) {
    return this._http.get("/cakes/" + cake_id);
  }
  createReview(newReview: any, cake_id: string) {
    return this._http.post("/cakes/" + cake_id, newReview);
  }
}
