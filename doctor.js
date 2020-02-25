import Nombre from "./nombre.js"

export default class Doctor {
    /**
     * 
     * @param {string} cedula Cedula donde trabaja
     * @param {string} especialidad Especialidad
     * @param {Nombre} nombre Nombre del doctor
     * @param {number} telefono Telefono del doctor
     */

    constructor(cedula, especialidad, nombre, telefono) {
    this.cedula = cedula
    this.especialidad = especialidad
    this.nombre = nombre
    this.telefono = telefono
}

getPerfil() {
    return `${this.cedula}, ${this.especialidad}, ${this.nombre.getNombreCompleto()}, ${this.telefono}`
}
}
