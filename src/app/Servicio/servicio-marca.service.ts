import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../Entidad/marca';

@Injectable({
  providedIn: 'root'
})
export class ServicioMarcaService {
  url = "http://localhost:7000/APIMARCA/";

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Marca[]>(this.url+"LISTAR");
  }

  add(m: Marca) {
    return this.http.post<Marca>(this.url+"GUARDAR", m);
  }

  edith(m: Marca) {
    return this.http.post<Marca>(this.url+"EDITAR", m);
  }

  delete(m: Marca) {
    return this.http.post<Marca>(this.url+"ELIMINAR", m);
  }

  find(m: Marca) {
    return this.http.post<Marca>(this.url+"BUSCAR", m);
  }

  count() {
    return this.http.get<number>(this.url+"CONTAR");
  }

  search(m: Marca) {
    return this.http.post<Marca[]>(this.url+"SEARCH", m);
  }
}
