import { NgModule } from "@angular/core";
import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { NavigationItemComponent } from "./navigation-item/navigation-item.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [
    NavigationMenuComponent,
    NavigationItemComponent,
    HeaderComponent
  ],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [NavigationMenuComponent, NavigationItemComponent, HeaderComponent]
})
export class HeaderModule {}
