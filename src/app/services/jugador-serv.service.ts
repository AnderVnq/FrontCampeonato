import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { JugadorInterface } from '../interfaces/jugador-interface';
import { EquipoInterface } from '../interfaces/equipo-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorServService {
  private readonly _http = inject(HttpClient)
  constructor() { }


  get():Observable<JugadorInterface[]>{
    return this._http.get<JugadorInterface[]>('http://127.0.0.1:5000/jugadores/')
  }

  

}
