import Fecha from "./fecha.js"

class Main {
    testFecha() {
        let Fecha = new Date(18, 2, 2023)
        console.log(Fecha.getDiaFecha())
    }
}
let app = new Main
app.testFecha()