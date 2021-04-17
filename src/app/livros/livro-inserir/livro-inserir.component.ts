import { Component } from '@angular/core';
@Component({
selector: 'app-livro-inserir',
templateUrl: './livro-inserir.component.html',
styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent {

  id: string;
  titulo: string;
  autor: string;
  numeroDePaginas: string;

  onAdicionarLivro() {
    console.log('inserindo livro...');
  }
}
