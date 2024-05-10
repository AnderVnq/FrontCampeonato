import { EquipoInterface } from "./equipo-interface"

export interface JugadorInterface {
    id?:number
    nombre:string
    apellido_mat:string
    apellido_pat:string
    fecha_nacimiento:Date
    img_dni?:string
    equipo:string
    foto?:string
    direccion:string
    posicion_jugador:string

}


