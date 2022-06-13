import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  listar() {
    this.router.navigate(["videojuegos/listar"]);
  }

  agregar() {
    this.router.navigate(["videojuegos/agregar"]);
  }
}
