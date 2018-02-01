import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  min = 0;
  max= 10;
  step = 1;

  handleMaxReached() {
    alert("max reached");
  }

  handleMinReached() {
    alert("min reached");
  }
}
