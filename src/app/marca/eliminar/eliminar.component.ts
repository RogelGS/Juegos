import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/Entidad/marca';
import { ServicioMarcaService } from 'src/app/Servicio/servicio-marca.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  m: Marca = new Marca();
  constructor(private router: Router, private s: ServicioMarcaService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.m.id =+ Number(localStorage.getItem("id"));
    this.s.find(this.m).subscribe(res => {
      this.m = res;
    });
  }
  
  eliminar() {
    this.s.delete(this.m).subscribe(res => {
      alert("SE ELIMINO EL ELEMENTO");
      this.router.navigate(["marcas/listar"]);
    })
  }

}
