import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h2>{{ title | myPure }}</h2>
    <h2>{{ title | myImpure }}</h2>
    <button (click)="(0)">Click me</button>
  `,
  styles: [],
})
export class AppComponent {
  title = "demo-pipe-ivy";
}
