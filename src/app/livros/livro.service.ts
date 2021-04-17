import { Livro } from './livro.model';
import { Subject } from 'rxjs';

export class LivroService {
private livro: Livro[] = [];
private listaLivrosAtualizada = new Subject<Livro[]>();

  getLivros(): Livro[] {
    return [...this.livro];
  }

  adicionarLivro(id: string, titulo: string, autor: string, numeroDePaginas: string) {
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      numeroDePaginas: numeroDePaginas
    };
    this.livro.push(livro);
    this.listaLivrosAtualizada.next([...this.livro]);
  }

  getListaDeLivrosAtualizadaObservable() {
    return this.listaLivrosAtualizada.asObservable();
  }
}
