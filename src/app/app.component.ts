import { Component } from '@angular/core';
import { Livro } from './livros/livro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-de-livros';

livros: Livro[] = [];
onLivroAdicionado(livro) {
this.livros = [...this.livros, livro];
}
}
