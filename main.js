import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"

class Main {
    testFecha() {
        let fecha = new Fecha(18, 2, 2023)
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha());
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
    testDoctor() {
        let doctor = new Doctor("Cedula 1", "Especialidad: Ginecólogo", "Dr. Alfonso Lopez", 3121456798)
        console.log(doctor.getPerfil())
    }
    testCita() {
        let cita = new Cita(new Fecha(26, 3, 2021), new Tiempo(13, 0, "pm"), "Dr. Alfonso Lopez", new Nombre("Vanessa", "Covarrubias", "Nava"))
        console.log(cita.getPerfil())
    }
}

let app = new Main
app.testFecha()
app.testTiempo()
app.testNombre()
app.testPaciente()
app.testDoctor()
app.testCita()