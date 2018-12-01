import { NgModule } from '@angular/core';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationMenuComponent, NavigationItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationMenuComponent]
})

export class HeaderModule {}
