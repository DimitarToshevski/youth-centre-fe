import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { TilesModule } from "@app/shared/components";
import { CardModule } from "@app/shared/components/material";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TilesModule, CardModule]
})
export class HomeModule {}
