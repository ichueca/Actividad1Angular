import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/modelo/noticia';
import { NoticiaService } from 'src/app/servicios/noticia.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styles: []
})
export class NoticiaDetalleComponent implements OnInit {
  noticia:Noticia;
  constructor(ruta:ActivatedRoute,
    private servicio:NoticiaService,
    private router:Router) {
    ruta.params.subscribe(
      datos => {
        this.noticia = this.servicio.getNoticiaPos(datos.pos);
      },
      error => console.log(error)
    )  
  }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['']);
  }
}
