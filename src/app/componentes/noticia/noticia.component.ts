import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia';
import { NoticiaService } from 'src/app/servicios/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styles: []
})
export class NoticiaComponent implements OnInit {
  @Input() noticia:Noticia;
  @Input() pos:number;
  constructor(servicio:NoticiaService) {
    this.noticia = servicio.getNoticiaPos(this.pos);

   }

  ngOnInit() {
  }

}
