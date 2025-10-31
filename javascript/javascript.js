

let imagenesArray = [


    "./images/heladera.png",
    "./images/lavarropa.png",
    "./images/microondas.png",
    "./images/secadora.png",
    "./images/conjunto.png"








]

let indice = 0;
const img = document.getElementById("imagenes");
img.src = imagenesArray[indice];

function siguiente() {
    indice++;
    if (indice < imagenesArray.length) {
        /*si pasa del final,vuelve al principio */

        img.alt = "imagen.png";
        img.src = imagenesArray[indice];

    } else {
        indice = 0;
        img.alt = "imagen.png";
        img.src = imagenesArray[indice];
    }


}
function anterior() {
    indice--; /* 0 , -1*/
    if (indice >= 0) {
        /*si llega al principio vuelve al final */

        img.alt = "imagen.png";
        img.src = imagenesArray[indice];
    } else {
        indice = imagenesArray.length - 1;
        img.alt = "imagen.png";
        img.src = imagenesArray[indice];
    }


}
function validacion() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('emailid');
    const telefono = documento.getElementById('telefono');


    let bandera = true;
    if (nombre.value == "" || nombre.value.length > 40) {
        bandera = false;
        let errornombre = document.getElementById("errornombre");
        errornombre.style.display = "block";
    }
    if (apellido.value == "" || apellido.value.length > 40) {
        bandera = false;
        let errorapellido = document.getElementById("errorapellido");
        errorapellido.style.display = "block";
    }
    let expRegular = /∧(\w|-)+@(gmail|hotmail|yahoo)(\.com|\.edu|\.ar){1,2}-$/;
    if (email.value == "" || email.value != expRegular) {
        bandera = false;
        let erroremail = document.getElementById('erroremail')
        erroremail.style.display = "block";
    }
    return bandera;
}


