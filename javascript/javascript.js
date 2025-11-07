

// let imagenesArray = [


//     "./images/heladera.png",
//     "./images/lavarropa.png",
//     "./images/microondas.png",
//     "./images/secadora.png",
//     "./images/conjunto.png"








// ]

// let indice = 0;
// const img = document.getElementById("imagenes");

// if (img) {

//     img.src = imagenesArray[indice];


// }


// function siguiente() {
//     if (!img) return;
//     indice++;
//     if (indice < imagenesArray.length) {
//         /*si pasa del final,vuelve al principio */

//         img.alt = "imagen.png";
//         img.src = imagenesArray[indice];

//     } else {
//         indice = 0;
//         img.alt = "imagen.png";
//         img.src = imagenesArray[indice];
//     }


// }



// function anterior() {
//     if (!img) return;
//     indice--; /* 0 , -1*/
//     if (indice >= 0) {
//         /*si llega al principio vuelve al final */

//         img.alt = "imagen.png";
//         img.src = imagenesArray[indice];
//     } else {
//         indice = imagenesArray.length - 1;
//         img.alt = "imagen.png";
//         img.src = imagenesArray[indice];
//     }


// }

let productos = [
    {
        imagen: "./images/heladera.png",
        nombre: "Heladera Philco",
        descripcion: "Eficiencia energética +A",
        precio: "$420.000"
    },
    {
        imagen: "./images/lavarropa.png",
        nombre: "Lavarropa Drean",
        descripcion: "Eficiencia energética +++A, AUTOMÁTICO",
        precio: "$724.000"
    },
    {
        imagen: "./images/microondas.png",
        nombre: "Microondas BGH",
        descripcion: "Con descongelado automático por peso.",
        precio: "$298.000"
    },
    {
        imagen: "./images/secadora.png",
        nombre: "Secadora Drean Family 60",
        descripcion: "Secadora eléctrica 6kg compacta",
        precio: "$320.000"
    },
    {
        imagen: "./images/conjunto.png",
        nombre: "Combo Cocina Moderna",
        descripcion: "El combo completo para tu cocina",
        precio: "$249.999"
    }
];

let indice = 0;
const img = document.getElementById("imagenes");
const nombreProducto = document.getElementById("nombreProducto");
const descripcionProducto = document.getElementById("descripcionProducto");
const precioProducto = document.getElementById("precioProducto");

// Función que actualiza todo el contenido
function mostrarProducto(i) {
    const producto = productos[i];
    img.src = producto.imagen;
    nombreProducto.textContent = producto.nombre;
    descripcionProducto.textContent = producto.descripcion;
    precioProducto.textContent = producto.precio;
}

// Mostrar el primero al cargar
if (img) {
    mostrarProducto(indice);
}

function siguiente() {
    if (!img) return;
    indice++;
    if (indice >= productos.length) indice = 0;
    mostrarProducto(indice);
}

function anterior() {
    if (!img) return;
    indice--;
    if (indice < 0) indice = productos.length - 1;
    mostrarProducto(indice);
}





function validacion() {

    //primero tengo los ids
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('emailid');
    const telefono = document.getElementById('telefono');

    document.getElementById("errorNombre").style.display = "none";
    document.getElementById("errorApellido").style.display = "none";
    document.getElementById("errorEmail").style.display = "none";
    document.getElementById("errorTelefono").style.display = "none";
    //despues hago los controles
    let bandera = false;

    if (nombre.value == "" || nombre.value.length > 40) {

        let errorNombre = document.getElementById("errorNombre");
        errorNombre.style.display = "block";
        bandera = true;
    }
    if (apellido.value == "" || apellido.value.length > 40) {

        let errorApellido = document.getElementById("errorApellido");
        errorApellido.style.display = "block";
        bandera = true;
    }
    let expRegular = /^(\w|-)+@(sanluis|gmail|hotmail|yahoo)(\.com|\.edu|\.ar){1,2}$/;
    if (email.value == "" || !expRegular.test(email.value)) {
        let errorEmail = document.getElementById('errorEmail')
        errorEmail.style.display = "block";
        bandera = true;
    }

    let expRegularTel = /^[0-9]{4}-[0-9]{6}$/ //formato ej: 2665-589474

    if (telefono.value == "" || !expRegularTel.test(telefono.value)) {

        let errorTelefono = document.getElementById("errorTelefono");

        errorTelefono.style.display = "block";

        bandera = true;


    }

    if (!bandera) {

        const resultados = document.getElementById("resultados");
        let articulo = document.createElement("h2");

        articulo.innerHTML = `el usuario ${nombre.value} con email ${email.value} se creo con exito!`
        resultados.appendChild(articulo);






    }



    return false;


}
function filtrar(categoria) {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(p => {
        const cate = p.getAttribute('data-cat')

        if (categoria === 'todos') {
            p.style.display = 'flex';
        } else if (cate === categoria) {
            p.style.display = 'flex';
        } else {
            p.style.display = 'none';
        }
    });
}

