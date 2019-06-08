import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HeaderModule } from "./app-layout/header/header.module";

import { HeaderComponent } from "./app-layout/header/header.component";
import { FooterComponent } from "./app-layout/footer/footer.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HeaderModule],
  providers: [RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule {}
