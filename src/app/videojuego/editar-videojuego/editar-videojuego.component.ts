import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/Entidad/marca';
import { Videojuego } from 'src/app/Entidad/videojuego';
import { ServicioMarcaService } from 'src/app/Servicio/servicio-marca.service';
import { ServicioVideojuegoService } from 'src/app/Servicio/servicio-videojuego.service';

@Component({
  selector: 'app-editar-videojuego',
  templateUrl: './editar-videojuego.component.html',
  styleUrls: ['./editar-videojuego.component.css']
})
export class EditarVideojuegoComponent implements OnInit {
  v: Videojuego = new Videojuego();
  marcas: Marca[];
  select: number = 0;

  constructor(private router: Router, private m: ServicioMarcaService, private s: ServicioVideojuegoService) { }

  ngOnInit(): void {
    this.llenar();
    this.buscar();
  }

  buscar() {
    this.v.id =+ Number(localStorage.getItem("id"));
    this.s.find(this.v).subscribe(res => {
      console.log(res);
      this.v = res;
      this.select = res.marca.id;
    });
  }
  
  editar() {
    this.s.edith(this.v).subscribe(res => {
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
