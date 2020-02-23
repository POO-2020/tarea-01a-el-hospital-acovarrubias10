import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"


export default class Cita {
    constructor(fecha, tiempo, doctor, nombre){
        this.fecha = fecha
        this.tiempo = tiempo
        this.doctor = doctor
        this.nombre = nombre
    }
getPerfil() {
    return `${this.fecha.getFecha()}, ${this.tiempo.getFormato24()}, ${this.doctor}, ${this.nombre.getNombreCompleto()}`
}
}