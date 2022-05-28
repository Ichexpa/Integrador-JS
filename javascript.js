function totalCategoria(cantidad) {
    let valorTicket = 200;
    let categoria = document.getElementById("select").value;
    switch (categoria) {
        case "Estudiante":
            valorTicket -= 200 * 0.8;
            return parseInt(cantidad) * valorTicket;
        case "Trainee":
            valorTicket -= 200 * 0.5;
            return parseInt(cantidad) * valorTicket;
        case "Junior":
            valorTicket -= 200 * 0.2;
            return parseInt(cantidad) * valorTicket;
    }
}

function calcularTotal() {

    let cantidad = document.getElementById("cantidad").value;
    console.log(cantidad);
    let total = document.getElementById("totalPagar");
    total.textContent = "Total a Pagar:$" + totalCategoria(cantidad);

}
function borrarContenidoInputs() {
    let arrayDeInputs = document.getElementsByClassName("form-control");
    for (i = 0; i < arrayDeInputs.length; i++) {
        arrayDeInputs[i].value = "";
    }
}


