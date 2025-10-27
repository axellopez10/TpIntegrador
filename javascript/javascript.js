
let imagenesArray = [



    'https://img.freepik.com/psd-gratis/refrigerador-puerta-francesa-acero-inoxidable-elegante_632498-25861.jpg?semt=ais_hybrid&w=740&q=80',
    'https://img.freepik.com/vector-gratis/horno-microondas-luz-interior-aislado-sobre-fondo-blanco-electrodomesticos-cocina_134830-658.jpg?semt=ais_hybrid&w=740&q=80',
    'https://media.istockphoto.com/id/1463361334/es/foto/m%C3%A1quina-de-lavado.jpg?s=612x612&w=0&k=20&c=yWaU3hQ7x7XK74aLwq4GKr8U7iFs_JWFLI8jx56dzqw='

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



