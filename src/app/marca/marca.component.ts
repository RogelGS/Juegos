import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
  

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }

  listar() {
    this.router.navigate(["listar"], {relativeTo: this.route});
  }

  agregar() {
    this.router.navigate(["agregar"], {relativeTo: this.route});
  }

  

  
}
