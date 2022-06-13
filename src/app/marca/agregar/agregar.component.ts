import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/Entidad/marca';
import { ServicioMarcaService } from 'src/app/Servicio/servicio-marca.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  m: Marca = new Marca();
  constructor(private router: Router, private s: ServicioMarcaService) { }

  ngOnInit(): void {
  }
  
  guardar() {
    this.s.add(this.m).subscribe(res => {
      alert("ITEM AGREGADO");
      this.router.navigate(["marcas/listar"]);
    });
  }
}
