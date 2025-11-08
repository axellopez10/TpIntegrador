

let imagenesArray = [


    "./images/heladera.png",
    "./images/lavarropa.png",
    "./images/microondas.png",
    "./images/secadora.png",
    "./images/conjunto.png"








]

let indice = 0;
const img = document.getElementById("imagenes");

if (img) {

    img.src = imagenesArray[indice];


}


function siguiente() {
    if (!img) return;
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
    if (!img) return;
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
if (document.getElementById("carritoModal")) {
    let carritoArray = [];
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("add-carrito")) {
            let nombre = e.target.getAttribute("data-nombre");
            let precioStr = e.target.getAttribute("data-precio");

            let precio = parseInt(precioStr.replace(/\./g, ''), 10);
            carritoArray.push({ nombre, precio });

            mostrarToast(nombre + " fue añadido al carrito");
            renderCarrito();
        }
    });
    const btnCarrito = document.getElementById('btnCarrito');
    const btnCerrarCarrito = document.getElementById('cerrarCarrito')
    const modalCarrito = document.getElementById("carritoModal");
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");

    function mostrarCarrito() {
        modalCarrito.style.display = "flex";
        renderCarrito();
    }
    function cerrarCarrito() {
        modalCarrito.style.display = "none";
    }
    function formatearPrecio(numero) {
        return '$' + numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    if (btnCerrarCarrito) {
        btnCerrarCarrito.addEventListener('click', cerrarCarrito)
    }

    function renderCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;

        carritoArray.forEach((item, i) => {
            let li = document.createElement("li");
            li.textContent = `${item.nombre} - $${(item.precio)}`;
            let btnX = document.createElement('button');
            btnX.textContent = 'X';
            btnX.style.marginLeft = '10px';
            btnX.onclick = function () {
                carritoArray.splice(i, 1);
                renderCarrito();
            };
            li.appendChild(btnX);
            listaCarrito.appendChild(li);

            total += item.precio;
        });
        totalCarrito.textContent = "Total: $" + total;
    }
    btnCarrito.addEventListener("click", mostrarCarrito);
    btnCerrarCarrito.addEventListener("click", cerrarCarrito);
    modalCarrito.addEventListener("click", function (e) {
        if (e.target === modalCarrito) cerrarCarrito();
    });
}
function mostrarToast(texto) {
    const toast = document.getElementById("toast");
    toast.textContent = texto;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
}