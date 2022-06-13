import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from './marca/marca.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { FormsModule } from '@angular/forms';
import { ServicioMarcaService } from './Servicio/servicio-marca.service';
import { ServicioVideojuegoService } from './Servicio/servicio-videojuego.service';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './marca/listar/listar.component';
import { AgregarComponent } from './marca/agregar/agregar.component';
import { EditarComponent } from './marca/editar/editar.component';
import { EliminarComponent } from './marca/eliminar/eliminar.component';
import { ListarVideojuegoComponent } from './videojuego/listar-videojuego/listar-videojuego.component';
import { AgregarVideojuegoComponent } from './videojuego/agregar-videojuego/agregar-videojuego.component';
import { EditarVideojuegoComponent } from './videojuego/editar-videojuego/editar-videojuego.component';
import { EliminarVideojuegoComponent } from './videojuego/eliminar-videojuego/eliminar-videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    VideojuegoComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    ListarVideojuegoComponent,
    AgregarVideojuegoComponent,
    EditarVideojuegoComponent,
    EliminarVideojuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioMarcaService, ServicioVideojuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
