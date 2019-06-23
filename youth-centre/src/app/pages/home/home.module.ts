import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { TilesModule, SpinnerModule } from "@app/shared/components";
import { CardModule } from "@app/shared/components/material";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TilesModule,
    CardModule,
    HttpClientModule,
    SpinnerModule
  ]
})
export class HomeModule {}
