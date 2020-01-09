import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/servicios/noticia.service';
import { Noticia } from 'src/app/modelo/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {
  noticias:Noticia[];
  constructor(servicio:NoticiaService) { 
    this.noticias = servicio.getNoticias();
  }

  ngOnInit() {
  }

}
