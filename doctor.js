export default class Doctor {
    /**
     * 
     * @param {string} cedula Cedula donde trabaja
     * @param {string} especialidad Especialidad
     * @param {string} doctor Nombre del doctor
     * @param {number} telefono Telefono del doctor
     */

    constructor(cedula, especialidad, doctor, telefono) {
    this.cedula = cedula
    this.especialidad = especialidad
    this.doctor = doctor
    this.telefono = telefono
}

getPerfil() {
    return `${this.cedula}, ${this.especialidad}, ${this.doctor}, ${this.telefono}`
}
}
