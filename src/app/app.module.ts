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

@NgModule({
  declarations: [
    AppComponent,
    LivroInserirComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
