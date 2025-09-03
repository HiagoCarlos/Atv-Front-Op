import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from "./components/rodape/rodape.component";
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { NoticiaComponent } from './components/noticia/noticia.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent, RodapeComponent, GaleriaComponent, ProdutosComponent, NoticiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste';
}
