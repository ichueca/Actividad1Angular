import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NoticiaDetalleComponent } from './componentes/noticia-detalle/noticia-detalle.component';


const routes: Routes = [
  {path:"", component:NoticiasComponent},
  {path:"detalle/:pos", component:NoticiaDetalleComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
