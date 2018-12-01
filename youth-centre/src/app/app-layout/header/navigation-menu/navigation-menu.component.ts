import { Component, OnInit } from '@angular/core';
import { menuItems } from './navigation-menu.content';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  menuItems = menuItems;
  constructor() { }

  ngOnInit() {
  }

}
