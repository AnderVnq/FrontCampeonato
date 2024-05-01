import { EquipoInterface } from "./equipo-interface"

export interface JugadorInterface {
    id?:number
    nombre:string
    apellido_pat:string
    apellido_mat:string
    fecha_nacimiento:Date
    img_dni?:string
    equipo:EquipoInterface
    foto?:string
    direccion:string
    posicion_jugador:string

}


