import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EquipoInterface } from '../interfaces/equipo-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoServService {
  private readonly _http = inject(HttpClient)

  constructor() { }

  get():Observable<EquipoInterface[]>{
    return this._http.get<EquipoInterface[]>('http://127.0.0.1:5000/equipos/');
  }

  get_by_id(id:number){
    return this._http.get(`http://127.0.0.1:5000/equipos/${id}`)
  }

  create(campeonato:EquipoInterface){
    return this._http.post('http://127.0.0.1:5000/equipos/',campeonato)
  }

  update(id:number,campeonato:EquipoInterface){
    return this._http.put(`http://127.0.0.1:5000/equipos/${id}`,campeonato)
  }

  delete(id:number){
    return this._http.delete(`http://127.0.0.1:5000/equipos/${id}`)
  }

  get_jugadores_equipo(id:number){
    return this._http.get(`http://127.0.0.1:5000/equipos/${id}/jugadores`)
  }
}
