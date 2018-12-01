import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent {

  @Input() title: string;
  @Input() link: string;
  @Input() dropdownItems: Array<{title: string, link: string}>;
  constructor() { }
}
