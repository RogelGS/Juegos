import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/Entidad/marca';
import { Videojuego } from 'src/app/Entidad/videojuego';
import { ServicioMarcaService } from 'src/app/Servicio/servicio-marca.service';
import { ServicioVideojuegoService } from 'src/app/Servicio/servicio-videojuego.service';

@Component({
  selector: 'app-agregar-videojuego',
  templateUrl: './agregar-videojuego.component.html',
  styleUrls: ['./agregar-videojuego.component.css']
})
export class AgregarVideojuegoComponent implements OnInit {
  v: Videojuego = new Videojuego();
  marcas: Marca[];
  select: number = 0;
  constructor(private router: Router, private m: ServicioMarcaService, private s: ServicioVideojuegoService) { }

  ngOnInit(): void {
    this.llenar();
  }

  guardar() {
    this.s.add(this.v).subscribe(res => {
      alert("SE HA AGREGADO EL ITEM");
      this.router.navigate(["videojuegos/listar"]);
    });
  }

  llenar() {
    this.m.getList().subscribe(res => {
      this.marcas = res;
    });
  }

  obtener() {
    this.v.marca = new Marca();
    this.v.marca.id = this.select;
  }
}
