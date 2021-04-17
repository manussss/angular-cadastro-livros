import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  @Input() livros: Livro[] = []

  // livros = [
  //   {
  //     id: '554875',
  //     titulo: 'Angular - Fundamentos',
  //     autor: 'Fulano',
  //     numeroDePaginas: '248'
  //   },
  //   {
  //     id: '561651',
  //     titulo: 'Javascript - Avançado',
  //     autor: 'Ciclano',
  //     numeroDePaginas: '389'
  //   },
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
