import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/Entidad/marca';
import { ServicioMarcaService } from 'src/app/Servicio/servicio-marca.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  marca: Marca[];
  m: Marca = new Marca();
  count: number;
  search: String = "";

  constructor(private router: Router, private s: ServicioMarcaService) { }

  ngOnInit(): void {
    this.llenar();
    this.contar();
  }

  llenar() {
    this.s.getList().subscribe(res => {
      this.marca = res;
    });
  }

  editar(m: Marca) {
    localStorage.setItem("id", m.id.toString());
    this.router.navigate(["marcas/editar"]);
  }

  eliminar(m: Marca) {
    localStorage.setItem("id", m.id.toString());
    this.router.navigate(["marcas/eliminar"]);
  }

  buscar() {
    this.m.nombre = this.search;
    this.s.search(this.m).subscribe(res => {
      this.marca = res;
    })
  }

  contar() {
    this.s.count().subscribe(res => {
      this.count = res;
    })
  }
}
