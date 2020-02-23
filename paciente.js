import Fecha from "./fecha.js"
import Nombre from "./nombre.js"

export default class Paciente {
    constructor(nombre, fechaNa, numero) {
        this.nombre = nombre
        this.fechaNa = fechaNa
        this.numero = numero
    }
    getPerfil() {
        return `${this.nombre.getNombreCompleto()}, ${this.fechaNa.getFecha()}, ${this.numero}`
    }
}