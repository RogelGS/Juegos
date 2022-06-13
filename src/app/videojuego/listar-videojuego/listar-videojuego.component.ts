import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/Entidad/videojuego';
import { ServicioVideojuegoService } from 'src/app/Servicio/servicio-videojuego.service';

@Component({
  selector: 'app-listar-videojuego',
  templateUrl: './listar-videojuego.component.html',
  styleUrls: ['./listar-videojuego.component.css']
})
export class ListarVideojuegoComponent implements OnInit {
  videojuego: Videojuego[];
  v: Videojuego = new Videojuego();
  search: String;
  count: number;
  
  constructor(private router: Router, private s: ServicioVideojuegoService) { }

  ngOnInit(): void {
    this.llenar();
    this.contar();
  }

  llenar() {
    this.s.getList().subscribe(res => {
      this.videojuego = res;
    });
  }

  editar(v: Videojuego) {
    localStorage.setItem("id", v.id.toString());
    this.router.navigate(["videojuegos/editar"]);
  }

  eliminar(v: Videojuego) {
    localStorage.setItem("id", v.id.toString());
    this.router.navigate(["videojuegos/eliminar"]);
  }

  buscar() {
    if(this.search == undefined) this.search = "";
    this.v.nombre = this.search;
    this.s.search(this.v).subscribe(res => {
      this.videojuego = res;
    });
  }

  contar() {
    this.s.count().subscribe(res => {
      this.count = res;
    });
  }
}
