import { NgModule } from "@angular/core";
import { TileComponent } from "./tile.component";
import { CommonModule } from "@angular/common";
import { SpinnerModule } from "../spinner/spinner.module";

@NgModule({
  imports: [CommonModule, SpinnerModule],
  declarations: [TileComponent],
  exports: [TileComponent]
})
export class TilesModule {}
