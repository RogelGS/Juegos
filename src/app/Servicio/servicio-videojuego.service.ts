import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Videojuego } from '../Entidad/videojuego';

@Injectable({
  providedIn: 'root'
})
export class ServicioVideojuegoService {
  url = "http://localhost:7000/APIVIDEOJUEGO/";
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Videojuego[]>(this.url+"LISTAR");
  }

  add(v: Videojuego) {
    return this.http.post<Videojuego>(this.url+"GUARDAR", v);
  }

  edith(v: Videojuego) {
    return this.http.post<Videojuego>(this.url+"EDITAR", v);
  }

  delete(v: Videojuego) {
    return this.http.post<Videojuego>(this.url+"ELIMINAR", v);
  }

  find(v: Videojuego) {
    return this.http.post<Videojuego>(this.url+"BUSCAR", v);
  }

  count() {
    return this.http.get<number>(this.url+"CONTAR");
  }

  search(v: Videojuego) {
    return this.http.post<Videojuego[]>(this.url+"SEARCH", v);
  }
}
