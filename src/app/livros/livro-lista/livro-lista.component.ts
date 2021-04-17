import { Injectable } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
@Injectable({ providedIn: 'root' })
export class LivroListaComponent implements OnInit, OnDestroy {

  livros: Livro[] = []
  private livrosSubscription: Subscription;

  constructor(public livroService: LivroService) {}

  ngOnInit(): void {
    this.livros = this.livroService.getLivros();
    this.livrosSubscription = this.livroService
    .getListaDeLivrosAtualizadaObservable()
    .subscribe((clientes: Livro[]) => {
      this.livros = clientes;
    });
  }

  ngOnDestroy(): void {
    this.livrosSubscription.unsubscribe();
  }

}
