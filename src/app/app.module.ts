import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MyPurePipe } from "./my-pure.pipe";
import { MyImpurePipe } from "./my-impure.pipe";

@NgModule({
  declarations: [AppComponent, MyPurePipe, MyImpurePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
