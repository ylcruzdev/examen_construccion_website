export const DateModule = {
    init() {
        const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

        const ahora = new Date()
        const diaSemana = dias[ahora.getDay()]
        const dia = ahora.getDate()
        const mes = meses[ahora.getMonth()]
        const año = ahora.getFullYear()

        const fechaTexto = `<p>${diaSemana}, ${dia} de ${mes} de ${año}</p>`

        const contenedor = document.querySelector("#date-dia-semana")
        if (contenedor) {
            contenedor.innerHTML = fechaTexto
        }
    }
}
