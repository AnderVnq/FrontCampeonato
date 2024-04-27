import { Injectable } from '@angular/core';
import { CampeonatoInterface } from '../interfaces/campeonatos-interface';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoServService {

  campeonatos:CampeonatoInterface[]=[
    {
      id:10,
      nombre:'campeonato invierno 2024',
      fecha_inicio:new Date('2024-12-12'),
      fecha_fin:new Date('2024-12-12'),
      tipo:'libre',
      lugar:'complejo deportivo ramon castilla',
      campeon:'ramon castilla'
    },
    {
      id:22,
      nombre:'campeonato verano 2025',
      fecha_inicio:new Date('2024-12-12'),
      fecha_fin:new Date('2024-12-12'),
      tipo:'libre',
      lugar:'complejo deportivo ramon castilla',
      campeon:''
    },
    {
      id:30,
      nombre:'campeonato invierno 2025',
      fecha_inicio:new Date('2024-12-12'),
      fecha_fin:new Date('2024-12-12'),
      tipo:'libre',
      lugar:'complejo deportivo ramon castilla'
    },
    {
      id:40,
      nombre:'campeonato invierno 2025',
      fecha_inicio:new Date('2024-12-12'),
      fecha_fin:new Date('2024-12-12'),
      tipo:'libre',
      lugar:'complejo deportivo ramon castilla'
    },
    {
      id:5,
      nombre:'campeonato invierno 2025',
      fecha_inicio:new Date('2024-12-12'),
      fecha_fin:new Date('2024-12-12'),
      tipo:'libre',
      lugar:'complejo deportivo ramon castilla'
    },
  ]




  get(){
    return [...this.campeonatos]
  }
  constructor() { }
}
