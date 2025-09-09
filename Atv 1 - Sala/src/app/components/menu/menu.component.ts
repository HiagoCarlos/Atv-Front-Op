import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true, // 👈 adiciona isso
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  titulo = 'Menu';
}
