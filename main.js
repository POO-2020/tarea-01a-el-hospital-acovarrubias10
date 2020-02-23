import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"

class Main {
    testFecha() {
        let fecha = new Fecha(18, 2, 2023)
        console.log(fecha.getFecha())
    }

    testTiempo() {
        let tiempo = new Tiempo(13, 0, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }

    testNombre() {
        let nombre = new Nombre("Vanessa", "Covarrubias", "Nava")
        console.log(nombre.getNombreCompleto())
        console.log(nombre.getApellidoNombre())
        console.log(nombre.getIniciales())
    }
    testPaciente() {
        let paciente = new Paciente(new Nombre("Vanessa", "Covarrubias", "Nava"), new Fecha(25, 2, 2001), 3121434929)
        console.log(paciente.getPerfil())
    }
}

let app = new Main
app.testFecha()
app.testTiempo()
app.testNombre()
app.testPaciente()