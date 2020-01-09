import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NoticiaDetalleComponent } from './componentes/noticia-detalle/noticia-detalle.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    NoticiasComponent,
    NoticiaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
