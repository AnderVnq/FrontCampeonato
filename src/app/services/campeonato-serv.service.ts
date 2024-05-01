import { Injectable, inject } from '@angular/core';
import { CampeonatoInterface } from '../interfaces/campeonatos-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoServService {
  private readonly _http =inject(HttpClient)

  constructor(){}
  

  get():Observable<CampeonatoInterface[]>{
    return this._http.get<CampeonatoInterface[]>('http://127.0.0.1:5000/campeonatos/');
  }


  get_by_id(id:number){
    return this._http.get(`http://127.0.0.1:5000/campeonatos/${id}`)
  }

  create(campeonato:CampeonatoInterface){
    return this._http.post('http://127.0.0.1:5000/campeonatos/',campeonato)
  }

  update(id:number,campeonato:CampeonatoInterface){
    return this._http.put(`http://127.0.0.1:5000/campeonatos/${id}`,campeonato)
  }

  delete(id:number){
    return this._http.delete(`http://127.0.0.1:5000/campeonatos/${id}`)
  }


  get_participantes_campeonato(id:number){
    return this._http.get(`http://127.0.0.1:5000/campeonatos/${id}/equipos_participantes/`)
  }

}
