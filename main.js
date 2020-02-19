import Fecha from "./fecha.js"

class Main {
    testFecha() {
        let fecha = new Fecha(18, 2, 2023)
        console.log(fecha.getFecha())
    }

    testTiempo() {
        console.log(tiempo.getTiempo())
    }
}

let app = new Main
app.testFecha()