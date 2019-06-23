import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MatButtonModule, MatDividerModule } from "@angular/material";

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatDividerModule],
  exports: [SidenavComponent]
})
export class SidenavModule {}
