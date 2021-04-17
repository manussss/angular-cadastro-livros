import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { LivroInserirComponent } from './livros/livro-inserir/livro-inserir.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LivroListaComponent } from './livros/livro-lista/livro-lista.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LivroService } from './livros/livro.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroInserirComponent,
    CabecalhoComponent,
    LivroListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
