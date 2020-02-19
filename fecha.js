export default class Fecha {

    contructor(dia, mes, año) {
        this.fecha = new Date(año, mes, dia)
        this.diaSemana = ["Domingo,", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
    }

    getAños() {
        let años = this.fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return años
    }

    getMeses() {
        let meses = this.fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return meses * 12
    }
    getSemanas() {
        let semanas = this.fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return semanas * 4 * 12
    }
}