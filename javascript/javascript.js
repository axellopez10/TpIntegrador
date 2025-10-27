
let imagenesArray = [



    'https://img.freepik.com/psd-gratis/refrigerador-puerta-francesa-acero-inoxidable-elegante_632498-25861.jpg?semt=ais_hybrid&w=740&q=80',
    'https://img.freepik.com/vector-gratis/horno-microondas-luz-interior-aislado-sobre-fondo-blanco-electrodomesticos-cocina_134830-658.jpg?semt=ais_hybrid&w=740&q=80',
    'https://media.istockphoto.com/id/1463361334/es/foto/m%C3%A1quina-de-lavado.jpg?s=612x612&w=0&k=20&c=yWaU3hQ7x7XK74aLwq4GKr8U7iFs_JWFLI8jx56dzqw='

]

let indiceImagenes = -1;

function carrousel() {




    let imagenes = document.getElementById("imagenes");


    imagenes.alt = "imagen.png"
    imagenes.src = imagenesArray[indiceImagenes];
    indiceImagenes++;





    // for (let aux = 0; aux <= imagenes.length; aux++) {

    //     let imagenes = document.getElementById("imagenes");

    //     imagenes.src = imagenes[aux];
    // }






}




