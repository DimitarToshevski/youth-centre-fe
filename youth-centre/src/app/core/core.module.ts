import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "../app-layout/header/header.module";
import { FooterModule } from "../app-layout/footer/footer.module";
import { SidenavModule } from "../app-layout/sidenav/sidenav.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, FooterModule, SidenavModule],
  exports: [HeaderModule, FooterModule, SidenavModule]
})
export class CoreModule {}
