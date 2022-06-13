import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './marca/agregar/agregar.component';
import { EditarComponent } from './marca/editar/editar.component';
import { EliminarComponent } from './marca/eliminar/eliminar.component';
import { ListarComponent } from './marca/listar/listar.component';
import { MarcaComponent } from './marca/marca.component';
import { AgregarVideojuegoComponent } from './videojuego/agregar-videojuego/agregar-videojuego.component';
import { EditarVideojuegoComponent } from './videojuego/editar-videojuego/editar-videojuego.component';
import { EliminarVideojuegoComponent } from './videojuego/eliminar-videojuego/eliminar-videojuego.component';
import { ListarVideojuegoComponent } from './videojuego/listar-videojuego/listar-videojuego.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';

const routes: Routes = [
  {path: "marcas", component: MarcaComponent, children: [
    {path: "listar", component: ListarComponent},
    {path: "agregar", component: AgregarComponent},
    {path: "editar", component: EditarComponent},
    {path: "eliminar", component: EliminarComponent}
  ]},
  {path: "videojuegos", component: VideojuegoComponent, children: [
    {path: "listar", component: ListarVideojuegoComponent},
    {path: "agregar", component: AgregarVideojuegoComponent},
    {path: "editar", component: EditarVideojuegoComponent},
    {path: "eliminar", component: EliminarVideojuegoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
