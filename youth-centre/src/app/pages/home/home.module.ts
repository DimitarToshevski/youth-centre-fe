import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { TilesModule } from "@app/shared/components";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TilesModule]
})
export class HomeModule {}
