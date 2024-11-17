import { Component } from '@angular/core';
import { MenuBarItemsComponent } from './menu-bar-items/menu-bar-items.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [ MenuBarItemsComponent ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
