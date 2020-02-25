import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"


export default class Cita {
    constructor(fecha, tiempo, doctor, paciente){
        this.fecha = fecha
        this.tiempo = tiempo
        this.doctor = doctor
        this.paciente = paciente
    }
getPerfil() {
    return `${this.fecha.getFecha()}, ${this.tiempo.getFormato24()}, Dr. ${this.doctor.nombre.apellido1}, ${this.paciente.nombre.getNombreCompleto()}`
}
}